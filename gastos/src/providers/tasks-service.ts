import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class TasksService {

  // public properties

  db: SQLiteObject = null;

  constructor() {}

  // public methods

  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  create(task: any){
    let sql = 'INSERT INTO gasto(title, quantity, description, types, icon) VALUES(?,?,?,?,?)';
    return this.db.executeSql(sql, [task.title, task.quantity, task.description, task.types, task.icon]);
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS gasto(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, quantity TEXT,  description TEXT, types TEXT, icon TEXT)';
    return this.db.executeSql(sql, []);
  }

  delete(id){
    let sql = 'DELETE FROM gasto WHERE id=?';
    return this.db.executeSql(sql, [id]);
  }

  getAll(){
    let sql = 'SELECT * FROM gasto';
    return this.db.executeSql(sql, [])
    .then(response => {
      let tasks = [];
      for (let index = 0; index < response.rows.length; index++) {
        tasks.push( response.rows.item(index) );
      }
      return Promise.resolve( tasks );
    })
    .catch(error => Promise.reject(error));
  }

  update(task: any){
    let sql = 'UPDATE gasto SET title=?, completed=? WHERE id=?';
    return this.db.executeSql(sql, [task.title, task.completed, task.id]);
  }

}
