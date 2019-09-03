import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarregamentoPage } from './carregamento';

@NgModule({
  declarations: [
    CarregamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CarregamentoPage),
  ],
})
export class CarregamentoPageModule {}
