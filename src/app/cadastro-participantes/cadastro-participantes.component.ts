import { Participante } from './../listaParticipantes/listaParticipantes';
import { CadastroParticipantesService } from './cadastro-participantes.service';
import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Turma } from './cadastro-participantes';

@Component({
  selector: 'cadastro-participantes',
  templateUrl: './cadastro-participantes.component.html',
  styleUrls: ['./cadastro-participantes.component.css']
})
export class CadastroParticipantesComponent implements OnInit{
  turmas: Turma[] =[];

  nome:string = '';
  email: string = '';
  observacao: string = '';

    cadastrar(){
      console.log('Participante Cadastrado com Sucesso');
      console.log('nome:', this.nome);
      console.log('e-mail:', this.email);
      console.log('observação:', this.observacao);
    }


    constructor(private CadastroParticipantesService: CadastroParticipantesService){
     }

    ngOnInit(): void {
      this.CadastroParticipantesService
        .listFromTurmas('turma')
        .subscribe(turmas =>{
          console.log(turmas);
        this.turmas = turmas;
      });


  }
}
