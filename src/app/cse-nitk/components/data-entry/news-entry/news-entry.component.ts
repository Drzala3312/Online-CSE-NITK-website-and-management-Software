import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-news-entry',
  templateUrl: './news-entry.component.html',
  styleUrls: ['./news-entry.component.scss']
})
export class NewsEntryComponent implements OnInit {

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

  addNewsAndEvents(title,content,link,linktext){
      this.newsList.push({
        title: title.value,
        content: content.value,
        link: link.value,
        linktext: linktext.value
      });
      this.clearData(title,content,link,linktext);
  }

  clearData(title,content,link,linktext){
    title.value = null;
    content.value = null;
    link.value = null;
    linktext.value = null;
  }
  deleteNews(key)
  {
    this.firebasedb.list('news-and-events').remove(key).then(res=>{
      console.log("Deleted");
    }).catch(err=>{
      console.log("err");
    })
  }
}
