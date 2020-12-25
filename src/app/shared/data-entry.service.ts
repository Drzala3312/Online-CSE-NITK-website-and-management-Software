import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DataEntryService {

  achievementDatalist: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getAchievementDataList(){
    this.achievementDatalist = this.firebasedb.list('achievement');
    return this.achievementDatalist;
  }

  addAchievementDataEntry(entry,bleName){
    this.achievementDatalist.push({

    })
  }
}
