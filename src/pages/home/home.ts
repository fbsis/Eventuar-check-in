import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { CredenciaPage } from './../credencia/credencia';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  token = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    //se ele ja estiver logado, vamos para cá.
    //this.navCtrl.setRoot(CredenciaPage);

  }

  public logar(){
      if(this.token ==''){
        let alert = this.alertCtrl.create({
             //title: 'Login no sistema',
             subTitle: 'O seu token está em branco',
             buttons: ['OK']
           });
           alert.present();
           return false;
      }

      if(this.token =='teste'){
        console.log('redirecioandoff');
        this.navCtrl.setRoot(CredenciaPage);
      }else{
        let alert = this.alertCtrl.create({
             //title: 'Login no sistema',
             subTitle: 'O seu token é inválido',
             buttons: ['OK']
           });
           alert.present();
           return false;
      }
  }

  ir_credenciamento(){
    this.navCtrl.setRoot(CredenciaPage);

  }

}
