import { CadastroParticipantesComponent } from './cadastro-participantes.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [
      CadastroParticipantesComponent
    ],
    exports: [
      CadastroParticipantesComponent],
    imports: [
        HttpClientModule,
        CommonModule
    ],
})
export class CadastroParticipantesModule {
}
