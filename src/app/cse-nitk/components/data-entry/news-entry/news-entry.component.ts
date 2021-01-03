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
  isUpdate: boolean;
  key: string;

  constructor(private firebasedb: AngularFireDatabase) {
    this.isUpdate = false;
   }

  ngOnInit() {
    this.getNewsAndEvents().snapshotChanges().subscribe(item=>{
      this.items = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.items.push(x);
      })
    });
    //reverse the array
    this.items = this.items.map(item => {
      return item.reverse();
    });
  }

  getNewsAndEvents() {
    this.newsList = this.firebasedb.list('news-and-events',ref => ref.orderByChild('timestamp'));
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
        linktext: linktext.value,
        timestamp: Date.now()*-1
      });
      this.clearData(title,content,link,linktext);
  }

  clearData(title,content,link,linktext){
    this.isUpdate = false;
    title.value = null;
    content.value = null;
    link.value = null;
    linktext.value = null;
  }
  deleteNews(key)
  {
    if(confirm('Are you Sure!')){
      this.firebasedb.list('news-and-events').remove(key).then(res=>{
        console.log("Deleted");
      }).catch(err=>{
        console.log("err");
      })
    }

  }
  // Edit Icon Event
  editNews(item,title,content,link,linktext)
  {
    this.isUpdate = true;
    title.value = item.title;
    content.value = item.content;
    link.value = item.link;
    linktext.value = item.linktext;
    this.key = item.$key;
  }
  

  //Update button event
   updateNewsAndEvents(title,content,link,linktext){
     var item =  {
      title: title.value,
      content: content.value,
      link: link.value,
      linktext: linktext.value
     }
     this.firebasedb.list('news-and-events').update(this.key,item);
     this.clearData(title,content,link,linktext);
  }
}
