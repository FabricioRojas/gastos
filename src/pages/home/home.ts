import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build',
    'american-football', 'boat', 'bluetooth', 'build'
  ];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  presentModal() {
    // const modal = this.modalCtrl.create(AddPage);
    // modal.present();
    this.navCtrl.push(AddPage);
  }
}
