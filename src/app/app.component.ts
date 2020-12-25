import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'online-cse-nitk';
  todoList: AngularFireList<any>;
  todoList1: AngularFireList<any>;
  todoListArr: any[];
  todoListArr1: any[];
  constructor(private firebasedb: AngularFireDatabase) { }

  ngOnInit() {
   this.getTodoList().snapshotChanges().subscribe(item=>{
     this.todoListArr = [];
     item.forEach(element => {
       var x = element.payload.toJSON();
       x["$key"] = element.key;
       this.todoListArr.push(x);
     })
   });

   this.getTodoList1().snapshotChanges().subscribe(item=>{
    this.todoListArr1 = [];
    item.forEach(element => {
      var x = element.payload.toJSON();
      x["$key"] = element.key;
      this.todoListArr.push(x);
    })
  });
  }


  getTodoList() {
    this.todoList = this.firebasedb.list('titles');
    return this.todoList;
  }

  getTodoList1() {
    this.todoList1 = this.firebasedb.list('titles1');
    return this.todoList1;
  }


  addEntry(entry) {
    this.todoList.push({
      title: entry.value,
      isChecked: false
    });
    entry.value = null;
  }

  addEntry1(entry) {
    this.todoList1.push({
      title1: entry.value,
      isChecked: false
    });
    entry.value = null;
  }
}
