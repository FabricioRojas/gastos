import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { TasksService } from '../providers/tasks-service';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AddPage } from '../pages/add/add';

@Component({
  templateUrl: 'app.html'
})
export class Gastos {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = AddPage;
  rootPage: any = ListPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public tasksService: TasksService,
    public sqlite: SQLite) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Lista', component: ListPage },
      { title: 'Nuevo', component: AddPage },
    ];

  }

  initializeApp() {
       this.platform.ready().then(() => {
         console.log('platform.ready');
         // Okay, so the platform is ready and our plugins are available.
         // Here you can do any higher level native things you might need.
         this.statusBar.styleDefault();
         this.splashScreen.hide();
         this.createDatabase();
       });
     }

     private createDatabase(){
       console.log('createDatabase');
       this.sqlite.create({
             name: 'data.db',
             location: 'default' // the location field is required
           })
           .then((db) => {
             this.tasksService.setDatabase(db);
             console.log('DB created');
             return this.tasksService.createTable();
           })
           .catch(error =>{
             console.error(error);
           });
     }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

