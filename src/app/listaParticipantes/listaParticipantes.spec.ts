import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaParticipantesComponent } from './listaParticipantes.component';

describe('ListaParticipantes', () => {
  let component: ListaParticipantesComponent;
  let fixture: ComponentFixture<ListaParticipantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaParticipantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
