import { Component } from '@angular/core';
import {INotice} from '../../interfaces/inotice';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-blogging',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blogging.component.html',
  styleUrl: './blogging.component.css',
})

export class BloggingComponent {
  notice: INotice = {
    title: "",
    url_foto: "", 
    notice_content: "",
    date: new Date()
  }

  news: INotice[] = [
    {
    title: "Mejores prácticas para trabajar con componentes en Angular",
    url_foto: "/images/img_1.png", 
    notice_content: `
    Trabajar con componentes en Angular puede ser tan sencillo o complejo como la arquitectura de tu aplicación. Una de las mejores prácticas es mantener cada componente modular y enfocado en una sola responsabilidad. Esto no solo facilita la comprensión del código, sino que también hace que cada pieza sea más fácil de probar y reutilizar en distintos contextos.

    Otro punto clave es la comunicación eficiente entre componentes. Angular ofrece varias herramientas, como @Input, @Output y servicios compartidos, que permiten transferir datos de manera clara y predecible. Evitar dependencias innecesarias y mantener los flujos de datos organizados reduce errores y mejora la mantenibilidad.

    El rendimiento también merece atención. Componentes con demasiada lógica o actualizaciones frecuentes pueden afectar la experiencia del usuario. Dividir responsabilidades, usar OnPush en estrategias de cambio y optimizar ciclos de vida ayuda a mantener la app ágil y receptiva.

    Por último, documentar y estandarizar patrones de diseño dentro de tu equipo asegura que todos trabajen de manera consistente. Con prácticas claras para nombrar, estructurar y comunicar componentes, tu proyecto Angular será más escalable y menos propenso a errores, facilitando futuras mejoras y colaboraciones.`,
    date: new Date(2026, 0, 1)
    },
    {
      title: "Creando formularios dinámicos en Angular con Signals",
      url_foto: "/images/img_2.png", 
      notice_content: `
      Los formularios son una parte esencial de cualquier aplicación web, pero cuando los datos cambian constantemente, los formularios estáticos se quedan cortos. Angular Signals permite construir formularios dinámicos y reactivos que se actualizan automáticamente al cambiar los datos, simplificando la lógica y reduciendo el código repetitivo.

      Al usar Signals, puedes vincular los valores de los campos directamente a tus modelos de datos, reaccionando instantáneamente a cambios sin depender de eventos manuales o suscripciones complicadas. Esto facilita la creación de formularios que se adaptan a distintas configuraciones, roles de usuario o respuestas previas.

      Además, trabajar con formularios dinámicos con Signals mejora el rendimiento y la mantenibilidad. Al reducir la necesidad de recalcular estados de manera explícita, tu aplicación se mantiene ágil incluso con formularios grandes o complejos, y tu código es más fácil de entender y escalar.

      Finalmente, adoptar este enfoque permite construir experiencias de usuario más intuitivas y fluidas, donde los formularios se ajustan al contexto de cada usuario sin retrasos ni comportamientos inesperados. Con Signals, Angular facilita crear interfaces reactivas y modernas con menor esfuerzo.`,
      date: new Date(2026, 1, 10)
      }
  ];

  saveNotice() {
    this.news.push(this.notice);
    this.notice = {
      title: "",
      url_foto: "", 
      notice_content: "",
      date: new Date()
    }
  }
}
