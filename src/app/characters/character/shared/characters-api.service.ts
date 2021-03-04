import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY ='';
  HASH ='';
  URL_API =`http://93.188.161.223:9000/participantes`;
  constructor(private http: HttpClient) { }
}
