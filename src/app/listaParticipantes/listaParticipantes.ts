import { Turma } from "../lista-turmas/lista-turmas";

export interface Participante{
  id: number;
  nome: string;
  email: string;
  observacoes: string;
  turma: Turma;

}
