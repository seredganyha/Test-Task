import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteChangedComponent } from './note-changed/note-changed.component';
import { NoteListComponent } from './note-list/note-list.component';

const routes: Routes = [
  {path: '', component: NoteListComponent},
  {path: 'note-list', component: NoteListComponent},
  {path: 'note-changed', component: NoteChangedComponent},
  {path: 'note-add', component: NoteAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
