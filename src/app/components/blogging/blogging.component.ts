import { Component } from '@angular/core';
import {IEntry} from '../../interfaces/ientry.interface';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import {ENTRY_LIST} from '../../db/blog_entry.db';

@Component({
  selector: 'app-blogging',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blogging.component.html',
  styleUrl: './blogging.component.css',
})

export class BloggingComponent {
  entry: IEntry = {
    title: "",
    url_foto: "", 
    entry_content: "",
    date: null
  }

  entryList: IEntry [] = ENTRY_LIST; 

  message: string = "";
  isError: boolean = false;

  showMessage(text: string, isError: boolean) {
    this.message = text;
    this.isError = isError;
  }
  
  closeMessage() {
    this.message = "";
  }

  placeholderImage(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = '/images/placeholder.svg';
  }

  saveEntry() {
    if (
      this.entry.title && 
      this.entry.url_foto && 
      this.entry.entry_content && 
      this.entry.date !== null) {
      this.entryList = [...this.entryList, { ...this.entry }];

      this.showMessage("Publicación creada correctamente", false);

      this.entry = {
        title: "",
        url_foto: "", 
        entry_content: "",
        date: null
      }
    } else {
      this.showMessage("Por favor, rellene todos los campos", true);
    }
  }
}
