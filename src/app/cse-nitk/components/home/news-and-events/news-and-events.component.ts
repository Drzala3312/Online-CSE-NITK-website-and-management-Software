import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-news-and-events',
  templateUrl: './news-and-events.component.html',
  styleUrls: ['./news-and-events.component.scss']
})
export class NewsAndEventsComponent implements OnInit {
  newsList: AngularFireList<any>;
  items = [];
  pageOfItems: Array<any>;

  constructor(private firebasedb: AngularFireDatabase) { }

  ngOnInit() {
    this.getNewsAndEvents().snapshotChanges().subscribe(item=>{
      this.items = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.items.push(x);
      })
    });
  }

  getNewsAndEvents() {
    this.newsList = this.firebasedb.list('news-and-events');
    return this.newsList;
  }

  onChangePage(pageOfItems: Array<any>) {
      // update current page of items
      this.pageOfItems = pageOfItems;
  }

}
