import{ HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participante} from './listaParticipantes';
const API = 'http://93.188.161.223:9000';

@Injectable({providedIn: 'root'})
export class ListaParticipantesService{

    constructor(private http: HttpClient){ }

    listFromParticipantes(participantes: string){
      return this.http
        .get<Participante[]>(API+'/participantes');

    }

    insertParticipantes(p : Participante){
        return this.http
        .post<Participante>(API+'/participantes', p);
    }
}

