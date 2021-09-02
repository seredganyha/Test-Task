import { Component, OnInit } from '@angular/core';
import { storingNotes, } from '../servises/storing-notes.servises';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.sass']
})
export class NoteListComponent implements OnInit {

  notes = this.storingNotes.getNotes() //получаем массив записей через сервис


  constructor(private storingNotes: storingNotes) { }

  ngOnInit(): void {
  }


  saveCurrentNote(index: number) {  
    this.storingNotes.setCurrentNote(index) 
    //при переходе на вкладку редактирования запись, сохраняем выбранную запись в сервисе
  }

}
