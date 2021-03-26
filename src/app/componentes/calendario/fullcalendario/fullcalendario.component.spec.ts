import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcalendarioComponent } from './fullcalendario.component';

describe('FullcalendarioComponent', () => {
  let component: FullcalendarioComponent;
  let fixture: ComponentFixture<FullcalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullcalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
