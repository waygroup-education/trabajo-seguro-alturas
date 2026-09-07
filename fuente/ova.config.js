/* =========================================================
   CURSO · Trabajo Seguro en Alturas (TSA)
   ---------------------------------------------------------
   Cliente:  [PENDIENTE · actualizar cuando se confirme]
   Audiencia: Trabajadores y coordinadores de trabajo en alturas
   Duración: 4 horas
   Preset visual: tsa
   Versión template: hibrida
   ========================================================= */

module.exports = {

  brand: {
    // Logo responsive: horizontal (desktop) + W-only (mobile/colapsado). Ya traen marca → name/sub vacíos.
    name: '',
    sub:  '',
    logo:       'assets/img/logos/waygroup-for-education-h.svg',
    logoMobile: 'assets/img/logos/waygroup-w-only.svg',
  },

  course: {
    code:             '',
    name:             'Trabajo Seguro en Alturas (TSA)',
    subtitle:         '',
    duration:         '4 horas',
    iso:              'ISO 9001:2015',
    licencia:         'Creative Commons BY-NC-SA 4.0',
    preset:           'tsa',
    pdf: 'assets/downloads/Curso_Trabajo_Seguro_en_Alturas.pdf',
    portadaFullBleed: true,
  },

  /* MENÚ · estándar Waygroup: Portada, Presentación, temas numerados (1, 2…) con
     subtemas como secciones ancladas (1.1, 1.2… las numera el build), Evaluación,
     Glosario y Referencias. Las especiales llevan el icono fijo del motor. */
  menu: [
    { id: 'inicio', titulo: 'Inicio', tipo: 'especial' },
    { id: 'presentacion', titulo: 'Presentación', tipo: 'especial' },
    { id: 'tema1', titulo: 'Marco normativo, roles y responsabilidades del trabajo seguro en alturas', tipo: 'tema',
      secciones: [
        { titulo: 'La normatividad de trabajo en alturas en Colombia, explicada de forma simple', ancla: 'normatividad' },
        { titulo: 'Qué es trabajo en alturas y desde qué altura aplica la norma', ancla: 'que-es-alturas' },
        { titulo: 'Quién es quién: los responsables del trabajo en alturas en una organización', ancla: 'roles' },
      ] },
    { id: 'tema2', titulo: 'Identificación de peligros, evaluación del riesgo de caída y jerarquía de controles', tipo: 'tema',
      secciones: [
        { titulo: 'Qué es un peligro y cómo identificarlo antes de subir', ancla: 'peligros' },
        { titulo: 'Qué tan grave es el riesgo: cómo decidirlo sin fórmulas', ancla: 'nivel-riesgo' },
        { titulo: 'Qué hacer primero: el orden correcto de las soluciones', ancla: 'jerarquia-controles' },
        { titulo: 'Peligros que no dependen de que alguien se caiga: objetos que caen y viento', ancla: 'objetos-viento' },
      ] },
    { id: 'tema3', titulo: 'Elementos de protección personal y sistemas de acceso para trabajo en alturas', tipo: 'tema',
      secciones: [
        { titulo: 'El arnés, la cuerda y los ganchos: qué son y para qué sirven', ancla: 'arnes-cuerdas' },
        { titulo: 'Cómo se sube: escaleras, andamios y plataformas', ancla: 'sistemas-acceso' },
        { titulo: 'Cómo revisar el equipo antes de usarlo, y cuándo decir “no”', ancla: 'inspeccion-equipo' },
        { titulo: 'Casco, guantes y gafas: la protección que casi siempre se olvida', ancla: 'epp-basico' },
      ] },
    { id: 'tema4', titulo: 'Permiso de trabajo en alturas, procedimientos operativos y atención de emergencias', tipo: 'tema',
      secciones: [
        { titulo: 'El permiso de trabajo en alturas como proceso de validación', ancla: 'permiso-trabajo' },
        { titulo: 'Qué se hace antes, durante y después de la tarea', ancla: 'procedimientos' },
        { titulo: 'Si algo sale mal: el plan de rescate', ancla: 'plan-rescate' },
        { titulo: 'Antes de firmar el permiso: la aptitud del trabajador y las condiciones del entorno', ancla: 'aptitud-condiciones' },
      ] },
    { id: 'tema5', titulo: 'Uso de la Inmersión de trabajo en alturas', tipo: 'tema' },
    { id: 'tema6', titulo: 'Cierre', tipo: 'tema' },
    { id: 'glosario', titulo: 'Glosario', tipo: 'especial' },
    { id: 'referencias', titulo: 'Referencias', tipo: 'especial' },
    // PENDIENTE: descomentar al recibir el documento de evaluación del cliente
    // { id: 'evaluacion',  titulo: 'Evaluación',  tipo: 'especial' },
  ],

  /* GLOSARIO · términos clave del curso (extraídos literal del DI, tabla "Palabra, término o abreviatura | Significado") */
  glosario: [
    { letra: 'A', termino: 'Ayudante de seguridad',
      definicion: 'Persona entrenada para apoyar en tierra o en un nivel seguro las actividades de trabajo en alturas, incluida la vigilancia de las condiciones de trabajo y el mantenimiento de comunicación permanente con el trabajador que ejecuta la tarea en altura.' },
    { letra: 'B', termino: 'Brigada de emergencia para rescate en alturas',
      definicion: 'Grupo de personas capacitadas y entrenadas específicamente para ejecutar el rescate de trabajadores suspendidos o lesionados en altura, con formación diferenciada a la de una brigada general de emergencias.' },
    { letra: 'C', termino: 'Coordinador de trabajo en alturas',
      definicion: 'Persona designada por el empleador para verificar la aplicación del PPPC, revisar y suscribir los permisos de trabajo en alturas antes de autorizar cada actividad, y confirmar en sitio que las condiciones descritas en el permiso correspondan a la realidad.' },
    { letra: 'D', termino: 'Distancia de detención',
      definicion: 'Espacio vertical requerido por un sistema de detención de caídas para frenar completamente a un trabajador tras una caída, sin que impacte una superficie u obstáculo; resulta de sumar la caída libre, la desaceleración del absorbedor, el estiramiento del arnés y un margen de seguridad.' },
    { letra: 'E', termino: 'Elemento de protección personal (EPP) contra caídas',
      definicion: 'Dispositivo individual, como el arnés, la eslinga, la línea de vida o el conector, diseñado para prevenir o detener una caída, o mitigar sus consecuencias, y que debe estar certificado, inspeccionado y usado conforme a la ficha técnica del fabricante.' },
    { letra: 'G', termino: 'GTC 45',
      definicion: 'Guía Técnica Colombiana del ICONTEC para la identificación de peligros y la valoración de riesgos en seguridad y salud ocupacional; no tiene carácter de norma legal obligatoria, pero es ampliamente adoptada como buena práctica dentro del SG-SST.' },
    { letra: 'J', termino: 'Jerarquía de controles',
      definicion: 'Orden de prioridad técnica para intervenir un riesgo: eliminación, sustitución, controles de ingeniería, controles administrativos y elementos de protección personal, aplicado de forma secuencial y no como opciones equivalentes.' },
    { letra: 'N', termino: 'Nivel de riesgo',
      definicion: 'Clasificación de qué tan grave es un peligro (por ejemplo, bajo, medio, alto o crítico), que resulta de combinar qué tan probable es que pase y qué tan grave sería si pasa; orienta qué tan urgente es corregir la situación.' },
    { letra: 'P', termino: 'Permiso de trabajo en alturas (PTA)',
      definicion: 'Documento que autoriza formalmente la ejecución de una tarea específica en altura, diligenciado por el trabajador o el empleador y suscrito por el coordinador; distinto del PPPC, que es el documento marco de gestión del programa.' },
    { letra: 'P', termino: 'Persona calificada',
      definicion: 'Persona con formación, conocimiento y experiencia demostrable para diseñar, analizar, evaluar y especificar los sistemas de protección contra caídas, incluyendo la certificación de puntos de anclaje.' },
    { letra: 'P', termino: 'Plan de rescate',
      definicion: 'Conjunto de procedimientos, roles y recursos definidos previamente para atender de forma segura a una persona suspendida o lesionada en altura, que debe ser específico para cada tarea y verificado antes de autorizar el permiso de trabajo.' },
    { letra: 'P', termino: 'Programa de Prevención y Protección contra Caídas (PPPC)',
      definicion: 'Documento marco del SG-SST que integra roles, capacitación, identificación de peligros, procedimientos y medidas de prevención y protección para el trabajo en alturas dentro de una organización.' },
    { letra: 'P', termino: 'Punto de anclaje',
      definicion: 'Elemento estructural certificado o evaluado por una persona calificada, al que se conecta un sistema de protección contra caídas, y que debe soportar la carga generada en caso de caída con el factor de seguridad requerido.' },
    { letra: 'R', termino: 'Riesgo',
      definicion: 'Combinación de la probabilidad de que un peligro se materialice y la severidad de las consecuencias que produciría, distinto del peligro, que es la condición o el acto con potencial de causar daño.' },
    { letra: 'S', termino: 'Simulador de trabajo en alturas',
      definicion: 'Entorno controlado, físico o virtual, diseñado para que el participante practique procedimientos de trabajo en alturas bajo condiciones seguras y supervisadas, previo cumplimiento de los requisitos teóricos de esta unidad.' },
    { letra: 'S', termino: 'Sistema de detención de caídas',
      definicion: 'Conjunto de componentes (arnés, línea de vida, absorbedor de energía, anclaje) que permite el desplazamiento del trabajador y detiene una caída si esta ocurre, exigiendo verificación de la distancia total de caída disponible.' },
    { letra: 'S', termino: 'Sistema de posicionamiento de trabajo',
      definicion: 'Sistema que sostiene al trabajador en un punto de la estructura, permitiéndole trabajar con las manos libres, sin sustituir un sistema de detención de caídas cuando la tarea lo requiere de forma independiente.' },
    { letra: 'S', termino: 'Sistema de restricción de caídas',
      definicion: 'Sistema que impide físicamente que el trabajador alcance un borde o zona con riesgo de caída, mediante una línea de longitud calculada para no permitir el acceso al punto de riesgo.' },
    { letra: 'T', termino: 'Trabajador autorizado',
      definicion: 'Trabajador capacitado y certificado para ejecutar directamente actividades de trabajo en alturas conforme a los requisitos normativos vigentes, incluyendo procesos de reentrenamiento periódico.' },
    { letra: 'T', termino: 'Trabajo en alturas',
      definicion: 'Toda actividad o desplazamiento realizado a 2 metros o más sobre un nivel inferior, en la que exista riesgo de caída, con exigibilidad de medidas de prevención y protección desde ese umbral.' },
    { letra: 'T', termino: 'Trauma por suspensión',
      definicion: 'Condición que puede presentarse en una persona suspendida e inmóvil en un arnés tras una caída detenida, asociada a la reducción del retorno venoso; hace crítico el tiempo de rescate y el modo en que este se ejecuta.' },
  ],

  /* REFERENCIAS · sección "7. Referencias bibliográficas y fuentes" del DI, literal */
  referencias: [
    { texto: 'American National Standards Institute y American Society of Safety Professionals. (2016). ANSI/ASSP Z359.1, Safety requirements for personal fall arrest systems, subsystems and components.' },
    { texto: 'Congreso de la República de Colombia. (1979). Ley 9 de 1979, por la cual se dictan medidas sanitarias. Diario Oficial.' },
    { texto: 'Congreso de la República de Colombia. (2012). Ley 1562 de 2012, por la cual se modifica el Sistema de Riesgos Laborales. Diario Oficial.' },
    { texto: 'Consejo Colombiano de Seguridad (CCS) y Federación de Aseguradores Colombianos (Fasecolda). (2024). Informe de siniestralidad laboral, primer semestre de 2024.' },
    { texto: 'González, A., Bonilla-Santos, J., Quintero, M., Reyes, C., y Chavarro, A. (2016). Análisis de las causas y consecuencias de los accidentes laborales ocurridos en dos proyectos de construcción. Revista Ingeniería de Construcción, 31(1), 5-16.' },
    { texto: 'Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC). (2012). GTC 45, Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional.' },
    { texto: 'Instituto Nacional de Medicina Legal y Ciencias Forenses. (2018). Cifras de mortalidad por caídas en Colombia, citado en: Panorama de muertes por caídas en Colombia. Revista Semana.' },
    { texto: 'Ministerio del Trabajo de Colombia. (2015). Decreto 1072 de 2015, Decreto Único Reglamentario del Sector Trabajo. Diario Oficial.' },
    { texto: 'Ministerio del Trabajo de Colombia. (2019). Resolución 0312 de 2019, por la cual se definen los estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo. Diario Oficial.' },
    { texto: 'Ministerio del Trabajo de Colombia. (2021). Resolución 4272 de 2021, por la cual se establecen los requisitos mínimos de seguridad para el desarrollo de trabajo en alturas. Diario Oficial N.º 51.942.' },
    { texto: 'National Institute for Occupational Safety and Health. Campaña Nacional para Prevenir las Caídas en la Construcción. Centros para el Control y la Prevención de Enfermedades (CDC).' },
  ],

  /* CRÉDITOS · equipo del curso */
  creditos: {
    bloques: [
      {
        titulo: 'Equipo del curso',
        personas: [
          { nombre: 'Pendiente confirmar', cargo: 'Dirección académica',     area: '—' },
          { nombre: 'Pendiente confirmar', cargo: 'Diseño instruccional',    area: '—' },
          { nombre: 'Pendiente confirmar', cargo: 'Validación técnica SST',      area: '—' },
          { nombre: 'Pendiente confirmar', cargo: 'Diseño y desarrollo OVA', area: '—' },
        ]
      },
    ],
  },
};
