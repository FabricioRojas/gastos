import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TasksService } from '../../providers/tasks-service';
import {NgForm} from '@angular/forms';

import { Gasto } from '../../app/models/gasto';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})

export class AddPage {

  title: string;
  quantity: string;
  description: string;
  types: string;
//  orderForm:ControlGroup;

  expense = {
              title: '',
              quantity: '',
              types: '',
              description: ''
             };

  item: Array<{
              title: string,
              quantity: string,
              types: string,
              description: string,
              icon: string
            }>;

  icons = ['md-restaurant', 'md-car', 'md-cart', 'md-bowtie', 'md-paw', 'md-cog'];

  constructor( public navCtrl: NavController, public toastCtrl: ToastController, public tasksService: TasksService) {
//      this.orderForm.createForm();
  }

  buttonTapped( f: NgForm) {
    this.item = [];
    if(this.checkForm()){
      this.item.push({
              title: typeof this.expense.title != 'undefined' || this.expense.title != "" ? this.expense.title : this.expense.types.split('|')[0],
              quantity: this.expense.quantity,
              description: typeof this.expense.description != 'undefined' || this.expense.description != "" ? this.expense.description : "Sin descripción",
              types: this.expense.types.split('|')[0],
              icon: this.icons[this.expense.types.split('|')[1]]
            });
      this.tasksService.create(this.item[0]).then(result => {console.log("result",result)});
      f.resetForm();
      this.presentToast('Gasto añadido');
      this.navCtrl.push(ListPage);
    }else{
      this.presentToast('Debes rellenar los campos');
    }
  }

  checkForm(){
    if(this.expense.quantity != "" &&  this.expense.types != "")
      return true;
    else
      return false
  }

  presentToast( texto: string ) {
    let toast = this.toastCtrl.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }
}
