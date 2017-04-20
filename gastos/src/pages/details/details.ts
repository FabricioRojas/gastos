import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
  
export class DetailsPage {
  selectedItem: any;
  icons: string[];
  items: Array<{
            title: string, 
            description: string, 
            icon: string
          }>;


   constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.selectedItem = navParams.get('item');

  }
}