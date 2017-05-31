import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TasksService } from '../../providers/tasks-service';

import { Gasto } from '../../app/models/gasto';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  constructor(
  public navCtrl: NavController,
  public toastCtrl: ToastController,
  private platform: Platform,
   public tasksService: TasksService) {

  }

  buttonTapped( storage: Storage) {
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
