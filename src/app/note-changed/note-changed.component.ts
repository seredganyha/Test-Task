import { Component, OnInit } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { Router } from '@angular/router';
import { storingNotes } from '../servises/storing-notes.servises';


@Component({
  selector: 'app-note-changed',
  templateUrl: './note-changed.component.html',
  styleUrls: ['./note-changed.component.sass']
})
export class NoteChangedComponent implements OnInit {



  isOpenDeleteModal = false
  currentNote = this.storingNotes.getCurrentNote() //получаем изменяемый компонент через сервис



  noteForm = {
    title: this.currentNote.title,
    text: this.currentNote.text
  }

  



  constructor(private fb: FormBuilder, private storingNotes: storingNotes, private router: Router) {

    console.log(storingNotes.getCurrentNote())

  }


  changeNote() {
    this.storingNotes.changeNote(this.currentNote.index, this.noteForm)
  }

  openDeleteModal() {
    this.isOpenDeleteModal = true
  }



  closeModal(hasClose: boolean) {
    this.isOpenDeleteModal = false
  }





  ngOnInit(): void {
    if (!this.storingNotes.getCurrentNote().isSaved) {
      this.router.navigate([''])
    }
    // проверяем была ли сохранена запись,чтобы при обновлении страницы возвращало на страницу всех записей
  }

}
