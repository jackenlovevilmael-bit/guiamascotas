// Catálogo de las mascotas más comunes del mundo
// Organizado por categoría. Más de 100 entradas.

export const CATEGORIES = [
  { key: "all", label: "Todas", emoji: "🐾" },
  { key: "perro", label: "Perros", emoji: "🐶" },
  { key: "gato", label: "Gatos", emoji: "🐱" },
  { key: "pajaro", label: "Pájaros", emoji: "🦜" },
  { key: "roedor", label: "Roedores", emoji: "🐹" },
  { key: "pez", label: "Peces", emoji: "🐠" },
];

// helper to generate unique id slugs
const slug = (s) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const make = (category, name, emoji, summary, care, common_issues, lifespan, size) => ({
  id: `${category}-${slug(name)}`,
  category,
  name,
  emoji,
  summary,
  care,
  common_issues,
  lifespan,
  size,
});

export const pets = [
  // ───── PERROS (30) ─────
  make("perro", "Labrador Retriever", "🐶", "Cariñoso, activo y excelente con niños. Una de las razas más populares del mundo.", "Necesita 1-2 h diarias de ejercicio. Cepillado semanal. Alimento balanceado de calidad.", ["Displasia de cadera", "Obesidad", "Otitis recurrente"], "10–12 años", "Grande"),
  make("perro", "Golden Retriever", "🐶", "Inteligente, dócil y muy sociable.", "Ejercicio diario, cepillado 2–3 veces por semana, baño cada 4–6 semanas.", ["Cáncer", "Displasia", "Alergias cutáneas"], "10–12 años", "Grande"),
  make("perro", "Pastor Alemán", "🐶", "Leal, valiente y muy entrenable. Excelente perro de trabajo.", "Ejercicio intenso, socialización temprana y obediencia básica.", ["Displasia coxofemoral", "Mielopatía degenerativa", "Torsión gástrica"], "9–13 años", "Grande"),
  make("perro", "Bulldog Francés", "🐶", "Compacto, sociable, ideal para departamento.", "Ejercicio moderado, evita el calor (braquicéfalo), limpia los pliegues faciales.", ["Problemas respiratorios", "Alergias", "Problemas oculares"], "10–12 años", "Pequeño"),
  make("perro", "Bulldog Inglés", "🐶", "Tranquilo, dulce y de aspecto inconfundible.", "Ejercicio suave, limpia pliegues, controla peso, evita calor.", ["Síndrome braquicéfalo", "Problemas de piel", "Displasia"], "8–10 años", "Mediano"),
  make("perro", "Beagle", "🐶", "Curioso, divertido y muy olfativo.", "Ejercicio diario, supervisión por su instinto rastreador.", ["Obesidad", "Epilepsia", "Otitis"], "12–15 años", "Mediano"),
  make("perro", "Poodle (Caniche)", "🐶", "Inteligente, hipoalergénico, en tres tamaños.", "Peluquería cada 6–8 semanas, ejercicio mental y físico.", ["Atrofia retinal", "Enfermedad de Addison", "Epilepsia"], "12–15 años", "Variable"),
  make("perro", "Chihuahua", "🐶", "Pequeño, valiente y muy apegado a su humano.", "Protege del frío, evita saltos altos, dieta controlada.", ["Luxación rotuliana", "Hipoglucemia", "Problemas dentales"], "12–20 años", "Toy"),
  make("perro", "Yorkshire Terrier", "🐶", "Pequeño, audaz, con pelo sedoso.", "Cepillado diario, peluquería mensual, control dental.", ["Colapso traqueal", "Hipoglucemia", "Luxación de rótula"], "12–15 años", "Toy"),
  make("perro", "Shih Tzu", "🐶", "Afectuoso, juguetón, ideal de compañía.", "Cepillado diario, limpia ojos, baño cada 3–4 semanas.", ["Problemas oculares", "Braquicefalia", "Otitis"], "10–16 años", "Pequeño"),
  make("perro", "Schnauzer", "🐶", "Alerta, juguetón, en tres tamaños.", "Cepillado semanal, peluquería trimestral, ejercicio diario.", ["Pancreatitis", "Cálculos urinarios", "Cataratas"], "12–15 años", "Variable"),
  make("perro", "Pug", "🐶", "Cariñoso, gracioso, perfecto para casa.", "Ejercicio moderado, evita calor, limpia pliegues.", ["Síndrome braquicéfalo", "Problemas oculares", "Obesidad"], "12–15 años", "Pequeño"),
  make("perro", "Boxer", "🐶", "Enérgico, leal y muy juguetón.", "Mucho ejercicio, evita calor extremo, dieta de calidad.", ["Cardiopatías", "Cáncer", "Displasia"], "10–12 años", "Grande"),
  make("perro", "Rottweiler", "🐶", "Fuerte, valiente, leal a su familia.", "Socialización temprana, entrenamiento firme, ejercicio diario.", ["Displasia", "Cardiopatías", "Osteosarcoma"], "8–10 años", "Grande"),
  make("perro", "Doberman", "🐶", "Atlético, inteligente, protector.", "Ejercicio intenso, entrenamiento, abrigo en climas fríos.", ["Cardiomiopatía dilatada", "Síndrome de Wobbler", "Hipotiroidismo"], "10–13 años", "Grande"),
  make("perro", "Husky Siberiano", "🐶", "Resistente, sociable, muy enérgico.", "Mucho ejercicio, espacio amplio, cepillado frecuente en muda.", ["Problemas oculares", "Displasia", "Epilepsia"], "12–15 años", "Mediano"),
  make("perro", "Border Collie", "🐶", "El más inteligente; requiere trabajo y estímulo.", "Mucho ejercicio mental y físico, entrenamiento avanzado.", ["Anomalía del ojo del Collie", "Epilepsia", "Sensibilidad MDR1"], "12–15 años", "Mediano"),
  make("perro", "Dálmata", "🐶", "Elegante, enérgico, sociable.", "Mucho ejercicio, dieta especial baja en purinas, agua abundante.", ["Cálculos urinarios", "Sordera congénita", "Alergias"], "11–13 años", "Mediano"),
  make("perro", "Cocker Spaniel", "🐶", "Dulce, alegre, de orejas largas.", "Cepillado frecuente, limpieza de orejas semanal.", ["Otitis", "Problemas oculares", "Cardiopatías"], "12–15 años", "Mediano"),
  make("perro", "Maltés", "🐶", "Pequeño, blanco, muy cariñoso.", "Cepillado diario, limpieza facial, higiene dental.", ["Problemas dentales", "Lagrimeo", "Hipoglucemia"], "12–15 años", "Toy"),
  make("perro", "Pomerania", "🐶", "Pequeño, peludo y juguetón.", "Cepillado frecuente, control dental, evita escaleras altas.", ["Colapso traqueal", "Alopecia X", "Luxación rotuliana"], "12–16 años", "Toy"),
  make("perro", "Dachshund (Salchicha)", "🐶", "Largo, valiente, terco encantador.", "Evita saltos y escaleras, mantén peso ideal.", ["Hernia discal", "Obesidad", "Problemas dentales"], "12–16 años", "Pequeño"),
  make("perro", "Akita", "🐶", "Reservado, leal y digno.", "Socialización temprana, cepillado frecuente, ejercicio moderado.", ["Displasia", "Hipotiroidismo", "Pénfigo"], "10–13 años", "Grande"),
  make("perro", "Shiba Inu", "🐶", "Independiente, limpio, alerta.", "Cepillado diario en muda, paseos diarios, mente activa.", ["Alergias", "Luxación rotuliana", "Atrofia retinal"], "12–15 años", "Mediano"),
  make("perro", "Mastín", "🐶", "Enorme, tranquilo, protector.", "Ejercicio moderado, dieta de alta calidad, espacio amplio.", ["Displasia", "Torsión gástrica", "Cardiopatías"], "6–10 años", "Gigante"),
  make("perro", "Gran Danés", "🐶", "Gigante gentil, elegante.", "Comida en altura, ejercicio moderado, control de crecimiento.", ["Torsión gástrica", "Cardiomiopatía", "Displasia"], "7–10 años", "Gigante"),
  make("perro", "Cavalier King Charles", "🐶", "Cariñoso, ideal compañía.", "Cepillado frecuente, control cardíaco anual.", ["Cardiopatía mitral", "Siringomielia", "Problemas oculares"], "9–14 años", "Pequeño"),
  make("perro", "Jack Russell Terrier", "🐶", "Pequeño, valiente, muy enérgico.", "Mucho ejercicio, estímulo mental, dieta controlada.", ["Luxación rotuliana", "Sordera", "Problemas oculares"], "13–16 años", "Pequeño"),
  make("perro", "Pitbull Terrier", "🐶", "Fuerte, cariñoso, fiel.", "Socialización, ejercicio diario, entrenamiento positivo.", ["Alergias cutáneas", "Displasia", "Cardiopatías"], "12–14 años", "Mediano"),
  make("perro", "Mestizo / Sin raza", "🐶", "Único en su estilo y muchas veces más sano.", "Conoce sus necesidades individuales, ejercicio acorde a tamaño.", ["Varía por antecedentes", "Parásitos", "Obesidad"], "12–16 años", "Variable"),

  // ───── GATOS (20) ─────
  make("gato", "Mestizo Doméstico", "🐱", "El gato más común del mundo. Resistente y sociable.", "Caja de arena limpia, alimentación balanceada, juegos diarios.", ["Parásitos", "Obesidad", "Enfermedades urinarias"], "13–17 años", "Mediano"),
  make("gato", "Persa", "🐱", "Pelo largo y carácter tranquilo.", "Cepillado diario, limpieza de ojos, control bucal.", ["Enfermedad renal poliquística", "Problemas respiratorios", "Lagrimeo"], "12–17 años", "Mediano"),
  make("gato", "Siamés", "🐱", "Vocal, inteligente y muy apegado.", "Estímulo mental, juegos, dieta de calidad.", ["Asma", "Amiloidosis", "Estrabismo"], "12–20 años", "Mediano"),
  make("gato", "Maine Coon", "🐱", "Gigante amable, pelo semilargo.", "Cepillado semanal, espacio amplio, control cardíaco.", ["Cardiomiopatía hipertrófica", "Displasia", "Obesidad"], "12–15 años", "Grande"),
  make("gato", "Ragdoll", "🐱", "Relajado, se 'derrite' en brazos.", "Cepillado regular, vida de interior, juegos suaves.", ["Cardiomiopatía", "Problemas urinarios", "Obesidad"], "12–17 años", "Grande"),
  make("gato", "Bengala", "🐱", "Manchas de leopardo, muy activo.", "Mucho juego, rascadores altos, dieta proteica.", ["Atrofia retinal", "Displasia", "Cardiomiopatía"], "12–16 años", "Mediano"),
  make("gato", "Británico de Pelo Corto", "🐱", "Calmado, redondeado, peluche.", "Cepillado semanal, control de peso, juegos diarios.", ["Cardiomiopatía", "Obesidad", "Enfermedad renal"], "12–17 años", "Mediano"),
  make("gato", "Sphynx (sin pelo)", "🐱", "Sin pelaje, muy cariñoso y curioso.", "Baño semanal, protege del sol y del frío, alimentación rica en calorías.", ["Cardiomiopatía", "Problemas dentales", "Sensibilidad cutánea"], "9–15 años", "Mediano"),
  make("gato", "Azul Ruso", "🐱", "Elegante, tranquilo, pelo plateado.", "Juego diario, dieta controlada, ambiente estable.", ["Cálculos urinarios", "Problemas dentales", "Obesidad"], "15–20 años", "Mediano"),
  make("gato", "Abisinio", "🐱", "Atlético, curioso, pelaje ticked.", "Mucho juego, espacios verticales, dieta de calidad.", ["Atrofia retinal", "Amiloidosis", "Gingivitis"], "12–15 años", "Mediano"),
  make("gato", "Bombay", "🐱", "Pantera en miniatura, sociable.", "Cepillado ligero, vida en interior, mucho cariño.", ["Cardiomiopatía", "Problemas respiratorios", "Lagrimeo"], "12–16 años", "Mediano"),
  make("gato", "Birmano", "🐱", "Cariñoso, social, ojos azules intensos.", "Cepillado semanal, compañía constante.", ["Diabetes", "Cardiomiopatía", "Hipocalemia"], "12–16 años", "Mediano"),
  make("gato", "Sagrado de Birmania", "🐱", "Místico, ojos azul zafiro y guantes blancos.", "Cepillado regular, ambiente tranquilo, juegos suaves.", ["Cardiomiopatía", "Problemas renales", "Espongiosis"], "12–16 años", "Mediano"),
  make("gato", "Scottish Fold", "🐱", "Orejas dobladas únicas, dulce.", "Cuidado articular, control veterinario regular.", ["Osteocondrodisplasia", "Cardiomiopatía", "Artritis"], "11–15 años", "Mediano"),
  make("gato", "Norwegian Forest", "🐱", "Robusto, semisalvaje, pelo doble.", "Cepillado intenso en muda, espacio para trepar.", ["Cardiomiopatía", "Displasia", "Glucogenosis"], "14–16 años", "Grande"),
  make("gato", "Munchkin", "🐱", "Patas cortas, súper juguetón.", "Cuidado articular, ejercicio moderado, dieta controlada.", ["Lordosis", "Problemas espinales", "Obesidad"], "12–14 años", "Pequeño"),
  make("gato", "American Shorthair", "🐱", "Saludable, sociable, fácil de cuidar.", "Cepillado semanal, juegos diarios, dieta equilibrada.", ["Cardiomiopatía", "Obesidad", "Diabetes"], "15–20 años", "Mediano"),
  make("gato", "Manx (sin cola)", "🐱", "Sin cola, juguetón, leal.", "Atención a la zona lumbar, dieta balanceada.", ["Síndrome de Manx", "Megacolon", "Artritis"], "8–14 años", "Mediano"),
  make("gato", "Devon Rex", "🐱", "Orejas grandes, pelo rizado.", "Baño ocasional, calor en invierno, mucho juego.", ["Cardiomiopatía", "Luxación de rótula", "Hipotricosis"], "9–15 años", "Pequeño"),
  make("gato", "Toyger", "🐱", "Aspecto de tigre miniatura.", "Estímulo intelectual, ejercicio, espacio para escalar.", ["Cardiomiopatía", "Problemas oculares", "Obesidad"], "10–15 años", "Mediano"),

  // ───── PÁJAROS (15) ─────
  make("pajaro", "Periquito Australiano", "🐦", "Pequeño, colorido, muy social.", "Jaula amplia, vuelo libre supervisado, mezcla de semillas + frutas.", ["Tumores", "Ácaros", "Problemas respiratorios"], "5–10 años", "Pequeño"),
  make("pajaro", "Canario", "🐤", "Canta hermoso, fácil de cuidar.", "Jaula con buena ventilación, baño diario, alpiste y verduras.", ["Acaros del aire", "Mudanza prolongada", "Obesidad"], "10–15 años", "Pequeño"),
  make("pajaro", "Agapornis (Inseparables)", "🦜", "Pequeño loro afectuoso, en pareja.", "Jaula amplia, juguetes, dieta variada (semillas + frutas).", ["PBFD", "Picaje", "Problemas hepáticos"], "10–15 años", "Pequeño"),
  make("pajaro", "Cacatúa Ninfa", "🦜", "Sociable, fácil de domesticar.", "Espacio para volar, dieta variada, mucho contacto humano.", ["Hipovitaminosis A", "Picaje", "Problemas respiratorios"], "15–25 años", "Mediano"),
  make("pajaro", "Loro Amazónico", "🦜", "Inteligente y muy parlanchín.", "Espacio amplio, estímulo mental, dieta de pellets y frutas.", ["Obesidad", "Aspergilosis", "Psitacosis"], "40–60 años", "Mediano"),
  make("pajaro", "Loro Gris Africano", "🦜", "Excepcional habilidad para hablar.", "Mucha interacción social, juguetes, dieta variada.", ["Hipocalcemia", "Picaje", "Estrés"], "40–60 años", "Mediano"),
  make("pajaro", "Guacamayo Azul y Amarillo", "🦜", "Imponente, llamativo, social.", "Espacio enorme, dieta rica, compañía constante.", ["Psitacosis", "Picaje", "Aspergilosis"], "50–80 años", "Grande"),
  make("pajaro", "Cotorra Argentina", "🦜", "Ruidosa, sociable, fácil de mantener.", "Jaula amplia, dieta variada, vuelo supervisado.", ["Obesidad", "Problemas hepáticos", "Hongos"], "15–20 años", "Mediano"),
  make("pajaro", "Diamante de Gould", "🐤", "Colorido, pequeño, sociable.", "Jaula de vuelo, temperatura estable, dieta de semillas y verduras.", ["Sensibilidad al frío", "Coccidios", "Parásitos"], "5–8 años", "Pequeño"),
  make("pajaro", "Diamante Mandarín", "🐤", "Pequeño, alegre, fácil cuidado.", "Pareja o grupo, jaula amplia, baño regular.", ["Tumores", "Obesidad", "Acaros respiratorios"], "5–10 años", "Pequeño"),
  make("pajaro", "Periquito Inglés", "🦜", "Más grande que el australiano, tranquilo.", "Espacio amplio, dieta balanceada, juguetes.", ["Tumores", "Megabacterias", "Problemas hepáticos"], "7–10 años", "Pequeño"),
  make("pajaro", "Conuro Sol", "🦜", "Brillante, ruidoso, juguetón.", "Mucha interacción, juguetes, dieta de pellets y frutas.", ["Síndrome de dilatación proventricular", "Picaje", "Aspergilosis"], "20–30 años", "Pequeño"),
  make("pajaro", "Cacatúa Galah", "🦜", "Rosa, divertida, muy activa.", "Espacio amplio, mucha interacción, dieta variada.", ["Obesidad", "Lipoma", "Picaje"], "40–60 años", "Mediano"),
  make("pajaro", "Eclectus", "🦜", "Macho verde, hembra roja, dócil.", "Dieta rica en frutas y verduras, sin exceso de vitaminas.", ["Hipervitaminosis A", "Picaje", "Aspergilosis"], "30–50 años", "Mediano"),
  make("pajaro", "Pinzón Cebra", "🐤", "Diminuto, sociable, fácil cría.", "Jaula de vuelo, pareja, dieta de semillas y verduras.", ["Acaros", "Coccidios", "Frío"], "5–7 años", "Pequeño"),

  // ───── ROEDORES y similares (15) ─────
  make("roedor", "Hámster Sirio (Dorado)", "🐹", "El más popular, solitario, nocturno.", "Jaula amplia, rueda silenciosa, virutas seguras, dieta variada.", ["Tumores", "Diabetes (no en Sirios)", "Cola húmeda"], "2–3 años", "Pequeño"),
  make("roedor", "Hámster Ruso (Campbell)", "🐹", "Pequeño, social en grupos del mismo sexo.", "Jaula con escondites, dieta sin azúcares (riesgo diabetes).", ["Diabetes", "Tumores", "Heridas por peleas"], "1.5–3 años", "Pequeño"),
  make("roedor", "Hámster Roborowski", "🐹", "Pequeñísimo, veloz, no muy manipulable.", "Jaula segura con tapa, mucho sustrato profundo.", ["Heridas por fugas", "Estrés", "Acaros"], "3–3.5 años", "Pequeño"),
  make("roedor", "Cobaya (Cuy)", "🐹", "Sociable, vocal, vive en grupo.", "Heno ilimitado, vitamina C diaria, espacio amplio (no jaulas para hámster).", ["Escorbuto (déficit vit C)", "Cálculos vesicales", "Pododermatitis"], "5–8 años", "Mediano"),
  make("roedor", "Conejo (doméstico)", "🐰", "Inteligente, social, necesita compañía.", "Heno ilimitado, verduras frescas, espacio para saltar.", ["GI estasis", "Maloclusión dental", "Mixomatosis"], "8–12 años", "Mediano"),
  make("roedor", "Conejo Enano (Toy)", "🐰", "Versión pequeña, igual de social.", "Espacio amplio, heno ilimitado, ejercicio diario.", ["Maloclusión", "Bolas de pelo", "Obesidad"], "7–10 años", "Pequeño"),
  make("roedor", "Conejo Belier", "🐰", "Orejas caídas, tranquilo, ideal niños.", "Limpieza de orejas, dieta rica en fibra, control veterinario.", ["Otitis", "Maloclusión", "Pododermatitis"], "7–10 años", "Mediano"),
  make("roedor", "Chinchilla", "🐭", "Pelaje suave, salta mucho, longeva.", "Baño de polvo, temperatura fresca (<24°C), heno ilimitado.", ["Estrés térmico", "Maloclusión", "Estasis GI"], "10–20 años", "Pequeño"),
  make("roedor", "Rata doméstica", "🐭", "Muy inteligente, sociable, limpia.", "Vive en grupo, jaula vertical, dieta variada.", ["Tumores mamarios", "Problemas respiratorios", "Pododermatitis"], "2–3 años", "Pequeño"),
  make("roedor", "Ratón doméstico", "🐭", "Pequeño, curioso, fácil cuidado.", "Jaula con barrotes finos, sustrato sin polvo, rueda silenciosa.", ["Tumores", "Acaros", "Problemas respiratorios"], "1.5–2 años", "Pequeño"),
  make("roedor", "Jerbo de Mongolia", "🐭", "Activo, social, excavador.", "Sustrato profundo para túneles, jaula amplia, vida en pareja del mismo sexo.", ["Convulsiones", "Tumores", "Heridas por fugas"], "3–5 años", "Pequeño"),
  make("roedor", "Hurón", "🐾", "Curioso, juguetón, social con humanos.", "Vacunación, dieta cárnica de calidad, ejercicio diario libre.", ["Insulinoma", "Enfermedad suprarrenal", "Linfoma"], "6–10 años", "Pequeño"),
  make("roedor", "Erizo africano", "🦔", "Nocturno, solitario, dulce con paciencia.", "Temperatura 22–26°C, rueda grande sin barrotes, dieta de croqueta + insectos.", ["Síndrome del erizo bamboleante", "Tumores", "Obesidad"], "4–6 años", "Pequeño"),
  make("roedor", "Cerdito vietnamita mini", "🐷", "Inteligente y curioso, requiere espacio.", "Espacio amplio exterior, dieta específica, cepillado, vacunas.", ["Obesidad", "Artritis", "Problemas dentales"], "12–18 años", "Mediano"),
  make("roedor", "Petauro del azúcar", "🐾", "Marsupial planeador, social en colonia.", "Vive en grupo, jaula alta, dieta especializada, ambiente cálido.", ["Estrés", "Deficiencia de calcio", "Autolesiones"], "10–15 años", "Pequeño"),

  // ───── PECES y acuáticos (20) ─────
  make("pez", "Goldfish (Carpa dorada)", "🐠", "Resistente, ideal para iniciarse.", "Acuario mínimo 100 L para 1 pez, filtración fuerte, agua fría.", ["Punto blanco", "Vejiga natatoria", "Hidropesía"], "10–20 años", "Mediano"),
  make("pez", "Betta (Pez luchador)", "🐟", "Colorido, macho solitario, vive en agua cálida.", "Mínimo 10 L, agua a 24–27°C, plantas vivas, sin compañeros agresivos.", ["Aletas podridas", "Velo gris", "Hidropesía"], "3–5 años", "Pequeño"),
  make("pez", "Guppy", "🐠", "Pequeño, colorido, fácil de reproducir.", "Acuario 40 L, agua tibia ligeramente dura, dieta variada.", ["Punto blanco", "Hexamita", "Estrés por superpoblación"], "1.5–3 años", "Pequeño"),
  make("pez", "Molly", "🐠", "Sociable, mejor con algo de sal.", "Acuario 60 L, vegetal en dieta, agua dura.", ["Shimmies (estrés osmótico)", "Punto blanco", "Velo gris"], "3–5 años", "Pequeño"),
  make("pez", "Platy", "🐠", "Colorido, pacífico, ideal para principiantes.", "Acuario 60 L, agua ligeramente dura, plantas vivas.", ["Punto blanco", "Hidropesía", "Constipación"], "3–4 años", "Pequeño"),
  make("pez", "Tetra Neón", "🐠", "Pequeño, azul brillante, en cardumen.", "Acuario plantado, mínimo 6 ejemplares, agua suave y ácida.", ["Enfermedad del neón", "Punto blanco", "Estrés"], "5–8 años", "Pequeño"),
  make("pez", "Tetra Cardenal", "🐠", "Similar al neón con más rojo, en grupo.", "Acuario plantado, mínimo 60 L, parámetros estables.", ["Punto blanco", "Hexamita", "Estrés"], "4–6 años", "Pequeño"),
  make("pez", "Disco", "🐠", "Rey del acuario, exigente.", "Acuario grande (mínimo 200 L), agua muy limpia, temperatura 28–30°C.", ["Hexamita", "Agujero en la cabeza", "Parásitos branquiales"], "10–15 años", "Mediano"),
  make("pez", "Escalar (Pez ángel)", "🐠", "Elegante, alas largas, semi-territorial.", "Acuario alto 150 L, comprable en grupo joven, agua tibia.", ["Hexamita", "Punto blanco", "Aletas rotas"], "8–10 años", "Mediano"),
  make("pez", "Cíclido Africano", "🐠", "Colorido, territorial, en grupo.", "Acuario 200 L con muchas rocas, agua dura y alcalina.", ["Estrés por peleas", "Hidropesía", "Parásitos"], "6–10 años", "Mediano"),
  make("pez", "Óscar", "🐠", "Inteligente, grande, vínculo con el dueño.", "Acuario mínimo 300 L, filtración potente, dieta carnívora.", ["Agujero en la cabeza", "Punto blanco", "Obesidad"], "10–20 años", "Grande"),
  make("pez", "Corydora", "🐠", "Pez gato de fondo, pacífico, en grupo.", "Sustrato fino, mínimo 6 ejemplares, dieta variada.", ["Daño en barbillas", "Punto blanco", "Estrés"], "5–10 años", "Pequeño"),
  make("pez", "Pleco común", "🐠", "Limpia algas, llega a ser grande.", "Acuario espacioso (>200 L), troncos para roer, dieta vegetal.", ["Deficiencia nutricional", "Estrés", "Heridas en boca"], "10–15 años", "Grande"),
  make("pez", "Ancistrus", "🐠", "Pleco pequeño, limpia algas suavemente.", "Acuario 80 L, troncos, vegetales frescos.", ["Hambre crónica", "Punto blanco", "Estrés"], "5–8 años", "Pequeño"),
  make("pez", "Killi", "🐠", "Colorido, vida corta, agua suave.", "Acuario tapado, mínimo 30 L, dieta de larvas vivas.", ["Estrés por salto", "Velo gris", "Parásitos"], "1–3 años", "Pequeño"),
  make("pez", "Killis anuales", "🐠", "Ciclo de vida marcado por estación.", "Acuario plantado, dieta viva, parámetros estables.", ["Estrés", "Parásitos", "Velo gris"], "0.5–1 año", "Pequeño"),
  make("pez", "Pez payaso (marino)", "🐠", "Famoso por la película, vive con anémona.", "Acuario marino mínimo 100 L, anémona compatible, parámetros precisos.", ["Brooklynella", "Punto blanco marino", "Estrés"], "6–10 años", "Pequeño"),
  make("pez", "Caracol manzana", "🐌", "Limpia algas, llamativo.", "Tapa el acuario, agua dura, suplemento de calcio.", ["Concha quebradiza", "Hambre", "Cloro"], "1–2 años", "Pequeño"),
  make("pez", "Gambas Neocaridina", "🦐", "Coloridas, limpian el acuario.", "Acuario plantado estable, sin cobre en medicación.", ["Sensibilidad al cobre", "Muda fallida", "Vorticella"], "1–2 años", "Pequeño"),
  make("pez", "Ajolote", "🦎", "Anfibio que conserva forma larval, fascinante.", "Acuario 80 L, agua fría (16–18°C), sin grava pequeña.", ["Hongos", "Impactación por grava", "Lesiones por compañeros"], "10–15 años", "Mediano"),
];

// Categories with counts
export const getCategoryCounts = () => {
  const counts = { all: pets.length };
  for (const c of CATEGORIES) {
    if (c.key === "all") continue;
    counts[c.key] = pets.filter((p) => p.category === c.key).length;
  }
  return counts;
};
