import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaParticipantesComponent} from './listaParticipantes/listaParticipantes.component'
import {ListaTurmasComponent} from './lista-turmas/lista-turmas.component'
import {CadastroTurmasComponent} from './cadastro-turmas/cadastro-turmas.component'
import {CadastroParticipantesComponent} from './cadastro-participantes/cadastro-participantes.component'
import { Home} from './home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path: 'home', component: Home },
  {path: 'listaParticipantes', component: ListaParticipantesComponent },
  {path: 'listaTurmas', component: ListaTurmasComponent},
  {path: 'cadastroTurmas', component: CadastroTurmasComponent},
  {path: 'cadastroParticipantes', component: CadastroParticipantesComponent},
  {path: 'footer', component: FooterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
