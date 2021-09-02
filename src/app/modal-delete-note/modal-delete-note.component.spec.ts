import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteNoteComponent } from './modal-delete-note.component';

describe('ModalDeleteNoteComponent', () => {
  let component: ModalDeleteNoteComponent;
  let fixture: ComponentFixture<ModalDeleteNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
