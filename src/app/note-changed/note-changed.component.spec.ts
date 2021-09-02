import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteChangedComponent } from './note-changed.component';

describe('NoteChangedComponent', () => {
  let component: NoteChangedComponent;
  let fixture: ComponentFixture<NoteChangedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteChangedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
