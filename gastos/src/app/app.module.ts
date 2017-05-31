import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { TasksService } from '../providers/tasks-service';

import { Gastos } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AddPage } from '../pages/add/add';
import { DetailsPage } from '../pages/details/details';

@NgModule({
  declarations: [
    Gastos,
    HomePage,
    ListPage,
    AddPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Gastos)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Gastos,
    HomePage,
    ListPage,
    AddPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    TasksService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
