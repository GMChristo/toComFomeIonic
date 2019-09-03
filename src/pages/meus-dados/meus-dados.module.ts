import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeusDadosPage } from './meus-dados';

@NgModule({
  declarations: [
    MeusDadosPage,
  ],
  imports: [
    IonicPageModule.forChild(MeusDadosPage),
  ],
})
export class MeusDadosPageModule {}
