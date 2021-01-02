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
  todoListArr: any[];
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


  }


  getTodoList() {
    this.todoList = this.firebasedb.list('titles');
    return this.todoList;
  }
  removeEntry(entry){
    console.log(this.todoListArr);
    this.todoList.remove(entry.value);
  console.log(this.todoListArr);
  }

  addEntry(entry) {
    this.todoList.push({
      title: entry.value,
      isChecked: false
    });
    entry.value = null;
  }


}
