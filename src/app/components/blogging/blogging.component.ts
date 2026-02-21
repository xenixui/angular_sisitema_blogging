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
    date: new Date()
  }

  entryList: IEntry [] = ENTRY_LIST; 

  saveEntry() {
    if (this.entry.title && this.entry.url_foto && this.entry.entry_content && this.entry.date) {
      this.entryList.push({ ...this.entry });

      this.entry = {
        title: "",
        url_foto: "", 
        entry_content: "",
        date: new Date()
      }
    } else {
      alert('Por favor, rellene todos los campos');
    }
  }
}
