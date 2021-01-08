import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DataEntryService {

  achievementDatalist: AngularFireList<any>;
  progCourse: AngularFireList<any>;
  types = ['Postgraduate', 'Undergraduate', 'Doctoral'];
  ugCategory = [
    'Engineering Science Core (ESC)',
    'Programme core (PC)',
    'Programme Specific Elective (PSE)',
    'Open Elective (OE)',
    'Programme Major Project (PMP)',
    'Mandetory Learning Courses (MLC)'
  ];
  pgCategory = [
    'Programme core (PC)',
    'Elective Course (Ele)',
    'Programme Major Project (PMP)',
    'Mandetory Learning Courses (MLC)',
  ];

  ugSems = ['First', 'Second','Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth'];
  pgSems = ['First', 'Second', 'Third', 'Fourth'];
  constructor(private firebasedb: AngularFireDatabase) { }



  getAchievementDataList() {
    this.achievementDatalist = this.firebasedb.list('achievement');
    return this.achievementDatalist;
  }

  addAchievementDataEntry(entry) {
    this.achievementDatalist = this.firebasedb.list('achievement');
    this.achievementDatalist.push(entry)
  }

  getProgrammeCourseList() {
    this.progCourse = this.firebasedb.list('programme_and_courses');
    return this.progCourse;
  }

  addProgrammeCourseEntry(entry){
    this.progCourse = this.firebasedb.list('programme_and_courses');
    this.progCourse.push(entry);
  }

}
