import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroParticipantesComponent } from './cadastro-participantes.component';

describe('CadastroParticipantesComponent', () => {
  let component: CadastroParticipantesComponent;
  let fixture: ComponentFixture<CadastroParticipantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroParticipantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
