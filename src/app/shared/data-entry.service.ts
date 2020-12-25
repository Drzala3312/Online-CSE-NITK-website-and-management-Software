import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DataEntryService {

  datalist: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getDataList(tableName){
    this.datalist = this.firebasedb.list(tableName);
    return this.datalist;
  }

  addDataEntry(entry,tableName){
    this.datalist.push({

    })
  }
}
