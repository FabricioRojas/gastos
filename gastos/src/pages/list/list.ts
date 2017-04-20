import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DetailsPage } from '../details/details';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
  
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{
            title: string, 
            quantity: string, 
            types: string, 
            description: string, 
            icon: string
          }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['md-cart', 'md-paw', 'md-restaurant'];

    this.items = [];
    for (let i = 0; i < 3; i++) {
      this.items.push({
        title: 'Item ' + i,
        quantity: '5',
        description: 'This is item #' + i,
        types: 'gasolina',
        icon: this.icons[i]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }
  
  buttonTapped(event) {
    this.navCtrl.push(AddPage);
  }
}
