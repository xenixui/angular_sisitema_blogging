import { IEntry } from "../interfaces/ientry.interface";

/*Textos de entradas para hacer pruebas · Copia y pega*/
const MOCK_REST_ENTRIES: IEntry[] = [
    {
        title: "Angular mejora la integración con TypeScript 6",
        url_foto: "/images/img_3.png", 
        entry_content: `
        Angular da un paso adelante en la seguridad y claridad del código gracias a su integración con TypeScript 6. Esta versión del lenguaje trae mejoras en inferencia de tipos, tipado condicional y decoradores más potentes, que Angular aprovecha para detectar errores antes de que lleguen a producción. Para los desarrolladores, esto significa menos bugs silenciosos y más confianza en la estabilidad de la aplicación.

        Una de las novedades más útiles es la capacidad de tipar de forma más precisa los inputs y outputs de los componentes, evitando errores comunes de comunicación entre módulos. Además, la integración con las herramientas de autocompletado y análisis de TypeScript mejora la experiencia de desarrollo, haciendo que escribir código en Angular sea más fluido y menos propenso a errores.

        El cambio también impacta en la escalabilidad de proyectos grandes. Equipos que manejan aplicaciones complejas podrán mantener arquitecturas más seguras y coherentes, reduciendo el riesgo de introducir bugs cuando se agregan nuevas funcionalidades.

        En resumen, la combinación de Angular 2026 con TypeScript 6 ofrece un entorno más sólido para escribir aplicaciones mantenibles y confiables. Los desarrolladores pueden centrarse en la lógica de negocio y la experiencia del usuario, mientras el compilador ayuda a garantizar que cada línea de código cumpla con los estándares de calidad.`,
        date: new Date(2026, 1, 12)
    },
    {
        title: "Novedades Angular 2026",
        url_foto: "/images/img_4.png", 
        entry_content: `
        Angular 2026 llega con mejoras que buscan hacer el desarrollo más rápido, limpio y reactivo. Entre las novedades más destacadas se encuentran la integración ampliada de Signals, optimizaciones de rendimiento y nuevas herramientas para manejar estados complejos en aplicaciones grandes.

        Una de las características más esperadas es la reactividad nativa mejorada, que permite actualizar la interfaz de usuario automáticamente sin necesidad de configuraciones complejas. Esto reduce la cantidad de código repetitivo y hace que los desarrolladores puedan centrarse en la lógica de negocio.

        También se han introducido mejoras en la compilación y carga de módulos, lo que significa aplicaciones más ligeras y tiempos de arranque más rápidos. Las herramientas de debugging y profiling ahora son más intuitivas, facilitando la identificación de cuellos de botella y errores en tiempo real.

        Por último, Angular 2026 apuesta por una experiencia de desarrollo más amigable y escalable, con mejores patrones de arquitectura, documentación renovada y soporte más profundo para integraciones modernas. Esto lo convierte en una actualización clave para equipos que buscan mantener sus proyectos a la vanguardia.`,
        date: new Date(2026, 1, 18)
    },
    {
        title: "Nueva estrategia de lazy loading basada en Signals",
        url_foto: "/images/img_5.png", 
        entry_content: `
        Angular presenta una estrategia de lazy loading avanzada basada en Signals, diseñada para optimizar la carga de módulos y componentes. Con esta técnica, solo se inicializan los elementos realmente necesarios en cada momento, lo que mejora el tiempo de carga inicial y reduce el consumo de memoria, especialmente en aplicaciones grandes.

        Gracias a Signals, los módulos pueden reaccionar automáticamente a cambios en el estado de la aplicación. Esto significa que los componentes se cargan justo cuando son requeridos, sin necesidad de gestionar manualmente sus ciclos de vida o sus dependencias. Para los desarrolladores, esto simplifica la arquitectura y reduce la complejidad del código.

        Esta nueva estrategia también contribuye a una experiencia de usuario más fluida, evitando retardos o parpadeos durante la navegación. Los equipos pueden mantener interfaces altamente interactivas sin comprometer el rendimiento, incluso en dispositivos con recursos limitados.

        En conclusión, el lazy loading basado en Signals combina eficiencia y reactividad, ofreciendo una forma moderna de manejar grandes aplicaciones Angular. Esta mejora refleja la tendencia del framework hacia una reactividad nativa y optimizada, que facilita tanto el desarrollo como la experiencia final del usuario.`,
        date: new Date(2026, 1, 22)
    }
]
