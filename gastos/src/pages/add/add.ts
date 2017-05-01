import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Gasto } from '../../app/models/gasto';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public storage: Storage) {
      storage.ready().then(() => {
          storage.set('name', 'Max');
          this.presentToast(storage.get('name'));
      });
  }

  buttonTapped( storage: Storage) {

    storage.ready().then(() => {
       storage.set('name', 'Max');
       this.presentToast(storage.get('name'));
    });

    this.navCtrl.push(AddPage);
  }
  
  presentToast(texto) {

    let toast = this.toastCtrl.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }
}
