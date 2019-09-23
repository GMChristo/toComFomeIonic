import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MeusDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meus-dados',
  templateUrl: 'meus-dados.html',
})
export class MeusDadosPage {

  /*private nomeCliente: string;
  private sobrenomeCliente: string;
  private cpfCnpjCliente: string;
  private endCliente: string;
  private numCliente: string;
  private bairroCliente: string;
  private cepCliente: string;
  private emailCliente: string;
  */
 private senhaCliente: string
 private senhaClienteConfirma: string;

 constructor(public navCtrl: NavController, public navParams: NavParams) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeusDadosPage');
  }

 salvarDadosCliente(){
   console.log(this.senhaCliente + ' - ' + this.senhaClienteConfirma);
   if(this.senhaCliente!=this.senhaClienteConfirma){
     alert("Insira duas senhas iguais!");
   }
   if(this.senhaCliente==this.senhaClienteConfirma){
     alert("As duas senhas são iguais!");
   }
 }

}
