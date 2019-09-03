import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagamentoConcluidoPage } from './pagamento-concluido';

@NgModule({
  declarations: [
    PagamentoConcluidoPage,
  ],
  imports: [
    IonicPageModule.forChild(PagamentoConcluidoPage),
  ],
})
export class PagamentoConcluidoPageModule {}
