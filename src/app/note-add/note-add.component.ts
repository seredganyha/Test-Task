
import { Component, OnInit } from '@angular/core';
import { storingNotes } from '../servises/storing-notes.servises';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.sass']
})
export class NoteAddComponent implements OnInit {

  noteForm = {
    title: 'Моя первая запись',
    text: 'content'
  }

  addNote() {
    if (this.noteForm.title === '') {
      this.noteForm.title = 'title'
    }
    if (this.noteForm.text === '') {
      this.noteForm.text = 'content'
    }
    this.storingNotes.setNote(this.noteForm)

  }

  constructor(private storingNotes: storingNotes) { }

  ngOnInit(): void {
  }

}
