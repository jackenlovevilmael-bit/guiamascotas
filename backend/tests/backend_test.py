"""Backend API tests for GuiaMascotas (pet first-aid site)."""
import os
import time
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://mascotas-web.preview.emergentagent.com").rstrip("/")
# Try reading from frontend .env if env not set
try:
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                break
except Exception:
    pass


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_health_ok(self, api):
        r = api.get(f"{BASE_URL}/api/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"


# ---------- Leads ----------
class TestLeads:
    def test_create_lead_valid(self, api):
        payload = {
            "name": "TEST Juan",
            "email": "test_juan@example.com",
            "pet_type": "perro",
            "message": "TEST mensaje",
        }
        r = api.post(f"{BASE_URL}/api/leads", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str)
        assert "created_at" in data
        assert data["name"] == "TEST Juan"
        assert data["email"] == "test_juan@example.com"
        assert data["pet_type"] == "perro"

    def test_create_lead_invalid_email(self, api):
        payload = {"name": "TEST", "email": "not-an-email", "pet_type": "gato"}
        r = api.post(f"{BASE_URL}/api/leads", json=payload, timeout=15)
        assert r.status_code in (400, 422), f"Expected validation error, got {r.status_code}: {r.text}"

    def test_create_lead_missing_name(self, api):
        payload = {"email": "x@y.com"}
        r = api.post(f"{BASE_URL}/api/leads", json=payload, timeout=15)
        assert r.status_code in (400, 422)

    def test_list_leads(self, api):
        r = api.get(f"{BASE_URL}/api/leads", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        # at least one TEST lead from earlier test
        emails = [d.get("email") for d in data]
        assert "test_juan@example.com" in emails


# ---------- Chat ----------
class TestChat:
    session_id = None

    def test_chat_empty_message_rejected(self, api):
        r = api.post(f"{BASE_URL}/api/chat", json={"message": ""}, timeout=15)
        assert r.status_code in (400, 422), f"Expected 4xx, got {r.status_code}"

    def test_chat_missing_message_rejected(self, api):
        r = api.post(f"{BASE_URL}/api/chat", json={}, timeout=15)
        assert r.status_code in (400, 422)

    def test_chat_valid_question(self, api):
        payload = {"message": "Mi perro vomitó dos veces, qué hago?"}
        r = api.post(f"{BASE_URL}/api/chat", json=payload, timeout=90)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "reply" in data and isinstance(data["reply"], str) and len(data["reply"]) > 0
        assert "session_id" in data and data["session_id"]
        # Should mention veterinarian in Spanish
        low = data["reply"].lower()
        assert ("veterinari" in low) or ("veterinari" in low), f"Reply does not mention veterinarian: {data['reply']}"
        TestChat.session_id = data["session_id"]

    def test_chat_session_continuity(self, api):
        assert TestChat.session_id, "previous test must have set session_id"
        # short pause
        time.sleep(1)
        r = api.post(
            f"{BASE_URL}/api/chat",
            json={"message": "Y si vuelve a vomitar mañana?", "session_id": TestChat.session_id},
            timeout=90,
        )
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["session_id"] == TestChat.session_id
        assert len(data["reply"]) > 0
