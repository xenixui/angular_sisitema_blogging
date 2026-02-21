import { Component, signal } from '@angular/core';
import {BloggingComponent} from './components/blogging/blogging.component';

@Component({
  selector: 'app-root',
  imports: [BloggingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tarea_5_blogging');
}
