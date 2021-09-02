import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteChangedComponent } from './note-changed/note-changed.component';
import { storingNotes } from './servises/storing-notes.servises';
import { ModalDeleteNoteComponent } from './modal-delete-note/modal-delete-note.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteAddComponent } from './note-add/note-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteChangedComponent,
    ModalDeleteNoteComponent,
    NoteAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [storingNotes],
  bootstrap: [AppComponent]
})
export class AppModule { }
