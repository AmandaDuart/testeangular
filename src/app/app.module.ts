import { ListaTurmasComponent } from './lista-turmas/lista-turmas.component';
import { ListaParticipantesComponent } from './listaParticipantes/listaParticipantes.component';
import { HttpResponse, HttpClientModule } from '@angular/common/http';
import { CadastroTurmasComponent } from './cadastro-turmas/cadastro-turmas.component';
import { CadastroParticipantesComponent } from './cadastro-participantes/cadastro-participantes.component';
import { FooterComponent } from './footer/footer.component';
import { Home } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaParticipantesComponent,
    ListaTurmasComponent,
    Home,
    FooterComponent,
    CadastroParticipantesComponent,
    CadastroTurmasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
