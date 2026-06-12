import { useEffect } from "react";
import Hero from "@/components/Hero";
import Disclaimer from "@/components/Disclaimer";
import SymptomsSection from "@/components/SymptomsSection";
import EmergencySection from "@/components/EmergencySection";
import FirstAidKit from "@/components/FirstAidKit";
import LeadForm from "@/components/LeadForm";
import PetsCatalog from "@/components/PetsCatalog";

export default function Home() {
  useEffect(() => {
    document.title =
      "GuiaMascotas | Primeros Auxilios y Cuidados para tu Mascota";
  }, []);

  return (
    <main data-testid="home-page">
      <Hero />
      <Disclaimer />
      <SymptomsSection />
      <PetsCatalog />
      <EmergencySection />
      <FirstAidKit />
      <LeadForm />
    </main>
  );
}
