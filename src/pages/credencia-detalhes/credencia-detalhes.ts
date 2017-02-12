import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the CredenciaDetalhes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-credencia-detalhes',
  templateUrl: 'credencia-detalhes.html'
})
export class CredenciaDetalhesPage {
  public dados = {
                  nome : '',
                  id: 0,
                  cpf: 0,
                  email : '',
                  presenca: 'Não presente'
                };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.dados.nome = this.navParams.get('nome');
    this.dados.id = this.navParams.get('id');
    this.dados.cpf = this.navParams.get('cpf');
    this.dados.email = this.navParams.get('email');
    this.dados.presenca = this.navParams.get('presenca') == 'Presente' ? 'Presente' : 'Não presente';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CredenciaDetalhesPage');
  }

  fazendo_checkin(id){

  }

}
