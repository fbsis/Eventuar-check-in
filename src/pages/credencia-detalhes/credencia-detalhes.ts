import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { CredenciaPage } from './../credencia/credencia';

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
  public dados = {nome : '', id: 0, cpf: 0, email : '', presenca: 'Não presente'};

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.dados.nome = this.navParams.get('nome');
    this.dados.id = this.navParams.get('id');
    this.dados.cpf = this.navParams.get('cpf');
    this.dados.email = this.navParams.get('email');
    this.dados.presenca = this.navParams.get('presenca') == 'Presente' ? 'Presente' : 'Não presente';
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CredenciaDetalhesPage');
  }

  fazer_checkin(id){
    let alert = this.alertCtrl.create({
         title: 'Check-in de participante',
         subTitle: 'Feito check-in do participante (colocar um controle de acesso offline + gravar no banco de dados)',
         buttons: ['OK']
       });
       alert.present();
       this.navCtrl.setRoot(CredenciaPage);
       return false;
  }

}
