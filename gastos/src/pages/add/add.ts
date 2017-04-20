import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public storage: Storage) {
      this.presentToast();
    
    
  }
  
  buttonTapped(event, storage: Storage) {
    storage.ready().then(() => {
       storage.set('name', 'Max');
    });
    this.navCtrl.push(AddPage);
  }
  
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Gasto añadido correctamente',
      duration: 3000
    });
    toast.present();
  }
}
