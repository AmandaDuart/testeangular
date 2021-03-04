import{ HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turma } from './cadastro-participantes';
const API = 'http://93.188.161.223:9000';

@Injectable({providedIn: 'root'})
export class CadastroParticipantesService{

    constructor(private http: HttpClient){ }

    listFromTurmas(turma: string){
        return this.http
            .get<Turma[]>(API+'/turma');
    }
}


