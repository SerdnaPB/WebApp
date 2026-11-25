export type NavItem = {
  label: string;
  href: string;
  icon: string;
  iconAlt: string;
};

export type Service = {
  id: string;
  title: string;
  question: string;
  problem: string;
  delivery: string;
  quote: string;
  image: string;
  imageAlt: string;
  icon: string;
  iconAlt: string;
  flow: string[];
  examples: { title: string; text: string }[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type SiteContent = {
  name: string;
  url: string;
  email: string;
  description: string;
  nav: NavItem[];
  home: {
    eyebrow: string;
    title: string;
    introduction: string;
    primaryAction: string;
    secondaryAction: string;
    audienceTitle: string;
    audienceText: string;
    closing: string;
  };
  services: {
    title: string;
    introduction: string;
    items: Service[];
  };
  process: {
    title: string;
    introduction: string;
    steps: ProcessStep[];
  };
  contact: {
    title: string;
    introduction: string;
    emailLabel: string;
    form: {
      labels: {
        name: string;
        company: string;
        email: string;
        service: string;
        message: string;
      };
      servicePlaceholder: string;
      submitLabel: string;
      note: string;
      errors: {
        name: string;
        company: string;
        email: string;
        service: string;
        message: string;
      };
    };
  };
};

export const site = {
  name: "Electrónica Pagador",
  // PLACEHOLDER: sustituir esta URL antes de publicar el sitio.
  url: "https://electronicapagador.example",
  // PLACEHOLDER: sustituir este correo antes de publicar el sitio.
  email: "contacto@electronicapagador.example",
  description:
    "Ayuda a pymes a poner en marcha webs, automatizaciones, chatbots y herramientas digitales, sin contratar un equipo técnico completo.",
  nav: [
    {
      label: "Inicio",
      href: "/",
      icon: "/icons/inicio.png",
      iconAlt: "Ilustración de una casa.",
    },
    {
      label: "Servicios",
      href: "/servicios",
      icon: "/icons/servicios.png",
      iconAlt: "Ilustración de un timbre de servicio.",
    },
    {
      label: "Proceso",
      href: "/proceso",
      icon: "/icons/proceso.png",
      iconAlt: "Ilustración de un camino de pasos.",
    },
    {
      label: "Contacto",
      href: "/contacto",
      icon: "/icons/contacto.png",
      iconAlt: "Ilustración de un sobre.",
    },
  ],
  home: {
    eyebrow: "Para pymes",
    title: "Actualice su empresa sin contratar un equipo técnico.",
    introduction:
      "De la primera conversación a la entrega: webs, automatización de documentos, chatbots y flujos de trabajo, con un alcance cerrado y un presupuesto a medida.",
    primaryAction: "Hablar sobre su proyecto",
    secondaryAction: "Ver servicios",
    audienceTitle: "La capacidad técnica que su pyme necesita",
    audienceText:
      "Si su pyme necesita una web, una automatización, un chatbot o un workflow, pero no cuenta con un equipo técnico, puede avanzar con un especialista que convierte esa necesidad en un proyecto concreto.",
    closing:
      "Si tiene un proyecto en mente, hablemos de qué necesita y de cómo convertirlo en una entrega concreta.",
  },
  services: {
    title: "Servicios",
    introduction:
      "Cada proyecto parte de su situación real y se define para entregar una solución que su empresa pueda utilizar y mantener.",
    items: [
      {
        id: "webs-y-desarrollos",
        title: "Webs y desarrollos",
        question: "¿Necesita una web propia?",
        problem:
          "Su empresa necesita presentar mejor su oferta o disponer de una herramienta digital propia.",
        delivery:
          "Recibe una web o aplicación enfocada en sus objetivos, con una estructura clara y preparada para su uso.",
        quote: "El presupuesto se prepara a medida según el alcance.",
        image: "/slides/webs.jpg",
        imageAlt:
          "Maqueta de papel con la estructura de una web, sobre una mesa de taller.",
        icon: "/icons/web.jpg",
        iconAlt: "Ilustración de un escaparate.",
        flow: [
          "Conversación sobre su oferta",
          "Estructura de las páginas",
          "Construcción",
          "Entrega lista para usar",
        ],
        examples: [
          {
            title: "Parte de trabajo",
            text: "El técnico lo rellena en el móvil y la oficina recibe el informe.",
          },
          {
            title: "Turnos y vacaciones",
            text: "El equipo apunta las horas y el responsable ve el resumen.",
          },
          {
            title: "Fichas que usted edita",
            text: "Actualiza productos o servicios sin tocar el diseño de la web.",
          },
          {
            title: "Reserva de horas",
            text: "La web muestra los huecos libres y recoge la solicitud.",
          },
          {
            title: "Estado del encargo",
            text: "Cada cliente consulta sus documentos y en qué punto está el trabajo.",
          },
          {
            title: "Recogida en tienda",
            text: "El catálogo enseña lo disponible y el cliente pide pasar a buscarlo.",
          },
        ],
      },
      {
        id: "automatizacion-de-documentacion",
        title: "Automatización de documentación",
        question: "¿Prepara los documentos uno a uno?",
        problem:
          "Su equipo dedica demasiado trabajo manual a crear, ordenar o actualizar documentos repetitivos.",
        delivery:
          "Recibe un sistema que simplifica la generación y gestión de documentación a partir de sus procesos.",
        quote: "El presupuesto se prepara a medida según el alcance.",
        image: "/slides/documentos.jpg",
        imageAlt:
          "Hojas en movimiento que se ordenan sobre un archivador de tela verde.",
        icon: "/icons/documentos.jpg",
        iconAlt: "Ilustración de un montón de documentos.",
        flow: [
          "Llegan los datos",
          "Se ordenan",
          "Sale el documento",
          "Usted lo revisa",
        ],
        examples: [
          {
            title: "Presupuesto en PDF",
            text: "Un formulario genera el presupuesto con sus precios y condiciones.",
          },
          {
            title: "Albarán y factura",
            text: "La revisión marca solo las líneas que no coinciden.",
          },
          {
            title: "Informe de visita",
            text: "Unas notas sueltas quedan redactadas como acta o informe.",
          },
          {
            title: "Contrato rellenado",
            text: "Los datos ya revisados pasan al contrato, sin copiarlos a mano.",
          },
          {
            title: "Facturas en su carpeta",
            text: "Cada factura queda con un nombre claro y en el sitio que le corresponde.",
          },
          {
            title: "Certificado de revisión",
            text: "Los datos de la visita salen en el certificado, listo para comprobar y firmar.",
          },
        ],
      },
      {
        id: "chatbots",
        title: "Chatbots",
        question: "¿Le preguntan siempre lo mismo?",
        problem:
          "Necesita facilitar respuestas o consultas sin aumentar la carga diaria de su equipo.",
        delivery:
          "Recibe un chatbot adaptado a la información, los límites y el contexto de uso de su empresa.",
        quote: "El presupuesto se prepara a medida según el alcance.",
        image: "/slides/chatbots.jpg",
        imageAlt:
          "Dos bocadillos de papel, uno claro y otro verde, junto a una lámpara.",
        icon: "/icons/consultas.jpg",
        iconAlt: "Ilustración de dos bocadillos de conversación.",
        flow: [
          "Llega la consulta",
          "Responde con su información",
          "Se detiene si no sabe",
          "Avisa a una persona",
        ],
        examples: [
          {
            title: "Manuales y tarifas",
            text: "Responde solo con los procedimientos y los precios de su empresa.",
          },
          {
            title: "Reseñas y WhatsApp",
            text: "Prepara la respuesta. Usted la revisa antes de publicarla.",
          },
          {
            title: "Consulta con los datos",
            text: "Pide lo que falta y deja la consulta clasificada.",
          },
          {
            title: "Elegir en el catálogo",
            text: "Pregunta qué necesita y propone unas opciones para que usted las confirme.",
          },
          {
            title: "Antes de la cita",
            text: "Solicita datos y documentos, y deja un resumen para la visita.",
          },
        ],
      },
      {
        id: "workflows-y-herramientas",
        title: "Workflows y herramientas",
        question: "¿Repite tareas a mano?",
        problem:
          "Varias tareas dependen de pasos manuales, aplicaciones desconectadas o seguimientos difíciles de controlar.",
        delivery:
          "Recibe un flujo automatizado o una herramienta interna que conecta los pasos necesarios y reduce fricción.",
        quote: "El presupuesto se prepara a medida según el alcance.",
        image: "/slides/workflows.jpg",
        imageAlt:
          "Cuatro tarjetas de papel unidas por un hilo verde sobre una pared clara.",
        icon: "/icons/tareas.jpg",
        iconAlt: "Ilustración de tarjetas unidas por un hilo.",
        flow: [
          "Una tarea que se repite",
          "Un paso automático",
          "El resultado en su herramienta",
          "Usted revisa lo importante",
        ],
        examples: [
          {
            title: "Leads en orden",
            text: "Lo que llega por la web, el correo o WhatsApp avisa a quien tiene que responder.",
          },
          {
            title: "Seguimiento de ofertas",
            text: "Se ve qué se envió, qué está pendiente y qué se ganó.",
          },
          {
            title: "Recordatorios",
            text: "Citas, renovaciones o impagos salen redactados, y una persona confirma el envío.",
          },
          {
            title: "Stock mínimo",
            text: "Avisa cuando un producto baja de la cantidad que usted marca.",
          },
          {
            title: "Alta con sus papeles",
            text: "El alta de un empleado o un proveedor lleva la lista de documentos que hay que pedir.",
          },
          {
            title: "Informe de la semana",
            text: "Pedidos, citas y consultas quedan reunidos en un solo correo.",
          },
          {
            title: "Compras por aprobar",
            text: "Cada petición llega al mismo sitio y queda anotado si se aprueba.",
          },
          {
            title: "Incidencia al responsable",
            text: "El aviso se clasifica y pasa a la persona que tiene que verlo.",
          },
          {
            title: "Pedidos a preparar",
            text: "Los pedidos de varios canales se ven juntos, con lo que ya se puede preparar.",
          },
        ],
      },
    ],
  },
  process: {
    title: "Proceso",
    introduction:
      "Un proceso directo para definir bien el trabajo, revisar avances y entregar una solución útil.",
    steps: [
      {
        title: "Conversación",
        description:
          "Revisamos su necesidad, el contexto de su empresa y qué resultado tendría valor.",
      },
      {
        title: "Propuesta",
        description:
          "Recibe una propuesta con alcance, entregables, condiciones y presupuesto adaptados al proyecto.",
      },
      {
        title: "Construcción por entregas",
        description:
          "El trabajo avanza en partes revisables para incorporar sus comentarios y mantener el foco.",
      },
      {
        title: "Entrega y acompañamiento",
        description:
          "Se entrega la solución acordada, junto con las indicaciones necesarias y el acompañamiento definido en la propuesta.",
      },
    ],
  },
  contact: {
    title: "Contacto",
    introduction:
      "Pulse el correo. Se abrirá su aplicación de correo para que escriba lo que necesita.",
    emailLabel: "Escribir por correo",
    form: {
      labels: {
        name: "Nombre",
        company: "Empresa",
        email: "Correo electrónico",
        service: "Servicio",
        message: "Mensaje",
      },
      servicePlaceholder: "Seleccione un servicio",
      submitLabel: "Enviar consulta",
      note: "Al enviar, se abrirá su aplicación de correo con el mensaje escrito. Este sitio no almacena sus datos.",
      errors: {
        name: "Escriba su nombre.",
        company: "Escriba el nombre de la empresa.",
        email: "Escriba un correo válido.",
        service: "Seleccione un servicio.",
        message: "Cuéntenos qué necesita, con al menos unas líneas.",
      },
    },
  },
} satisfies SiteContent;
