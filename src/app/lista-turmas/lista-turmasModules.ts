import { ListaTurmasComponent } from './lista-turmas.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [
      ListaTurmasComponent
    ],
    exports: [
      ListaTurmasComponent],
    imports: [
        HttpClientModule,
        CommonModule
    ],
})
export class ListaTurmasModule {
}
