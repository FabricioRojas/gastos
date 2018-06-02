import { Component } from '@angular/core';
import { NavController,ViewController,ToastController } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'test toast',
      duration: 2000,
      position: 'bottom'
    });

    toast.present(toast);
  }
}
