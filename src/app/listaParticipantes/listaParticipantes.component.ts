import { ListaParticipantesService } from './listaParticipantes.service';
import { HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Participante } from './listaParticipantes';
const API = 'http://93.188.161.223:9000';


@Component({
  selector: 'listaParticipantes',
  templateUrl: './listaParticipantes.component.html',
  styleUrls: ['./listaParticipantes.component.css']
})
export class ListaParticipantesComponent  implements OnInit{
  participantes: Participante[] = [];

  inserirParticipantes(p: Participante): String{
    this.inserirParticipantes(p);
    return "";
  }

    constructor(private listaParticipantesService : ListaParticipantesService){
     }

    ngOnInit(): void {
      this.listaParticipantesService
      .listFromParticipantes('participantes')
      .subscribe(participantes => {
        //console.log(participantes);
        this.participantes = participantes
      });

  }
}
