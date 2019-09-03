import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntregaPedidoPage } from './entrega-pedido';

@NgModule({
  declarations: [
    EntregaPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(EntregaPedidoPage),
  ],
})
export class EntregaPedidoPageModule {}
