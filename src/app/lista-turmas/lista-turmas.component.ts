import { ListaTurmasService } from './lista-turmas.service';
import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {Turma } from './lista-turmas';

@Component({
  selector: 'lista-turmas',
  templateUrl: './lista-turmas.component.html',
  styleUrls: ['./lista-turmas.component.css']
})
export class ListaTurmasComponent implements OnInit{
  turmas: Turma[] =[];

    constructor(private listaTurmasService: ListaTurmasService){
     }

    ngOnInit(): void {
      this.listaTurmasService
        .listFromTurmas('turma')
        .subscribe(turmas =>{
          console.log(turmas);
        this.turmas = turmas;
      });


  }
}
