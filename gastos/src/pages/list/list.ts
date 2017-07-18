import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TasksService } from '../../providers/tasks-service';

import { DetailsPage } from '../details/details';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

  tasks: any[] = [];
  selectedItem: any;
  items: Array<{
            id: number,
            title: string,
            quantity: string,
            types: string,
            description: string,
            icon: string
          }>;

  constructor( public navCtrl: NavController, public navParams: NavParams, public tasksService: TasksService) {
    tasksService.getAll().then(expenses => { this.loadExpenses(expenses) });
    this.selectedItem = navParams.get('item');
  }

  deleteExpense(id){
    this.tasksService.delete(id);
    this.tasksService.getAll().then(expenses => { this.loadExpenses(expenses) });
  }

  doRefresh(refresher) {
    setTimeout(() => {
       this.tasksService.getAll().then(expenses => { this.loadExpenses(expenses) });
       refresher.complete();
    }, 2000);
  }

  loadExpenses(expenses){
    this.items = [];
    console.log('expenses', expenses);
    for (let i = 0; i < expenses.length; i++) {
      this.items.push({
        id: expenses[i].id,
        title: expenses[i].title,
        quantity: expenses[i].quantity,
        description: expenses[i].description,
        types: expenses[i].types,
        icon: expenses[i].icon
      });
    }
  }

  itemTapped(item) { this.navCtrl.push(DetailsPage, { item: item }); }

  buttonTapped(event) { this.navCtrl.push(AddPage); }
}
