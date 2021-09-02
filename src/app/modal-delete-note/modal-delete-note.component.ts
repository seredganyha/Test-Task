import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { storingNotes } from '../servises/storing-notes.servises';

@Component({
  selector: 'app-modal-delete-note',
  templateUrl: './modal-delete-note.component.html',
  styleUrls: ['./modal-delete-note.component.sass']
})
export class ModalDeleteNoteComponent implements OnInit {


  currentNote = this.storingNotes.getCurrentNote()
  isopenDeleteModal= true
  @Output() hasCloseModal = new EventEmitter<boolean>()

  constructor(private storingNotes: storingNotes, private router: Router) { }

  deleteElem(){
    this.storingNotes.deleteNote(this.currentNote.index)
    this.router.navigate([''])
  }

  closeDeleteModal() {
    this.hasCloseModal.emit(false)
  }


  ngOnInit(): void {
  }

}
