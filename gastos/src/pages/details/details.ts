import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TasksService } from '../../providers/tasks-service';

import { ListPage } from '../list/list';

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


   constructor(public navCtrl: NavController, public navParams: NavParams, public tasksService: TasksService) {
    this.selectedItem = navParams.get('item');
  }

  deleteExpense(id){
      this.tasksService.delete(id);
      this.navCtrl.push(ListPage);
  }
}
