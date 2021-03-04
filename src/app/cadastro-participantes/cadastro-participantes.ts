import { Participante } from "../listaParticipantes/listaParticipantes";


export interface Turma{
  id:number;
  descricao:string;
  tipo:string;
  participantes:Participante[];
}
