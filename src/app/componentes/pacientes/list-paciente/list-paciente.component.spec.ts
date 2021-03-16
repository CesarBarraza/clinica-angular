import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPacienteComponent } from './list-paciente.component';

describe('ListPacienteComponent', () => {
  let component: ListPacienteComponent;
  let fixture: ComponentFixture<ListPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
