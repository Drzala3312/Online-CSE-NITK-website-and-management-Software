import { Component, OnInit } from '@angular/core';
import { DataEntryService } from '../../../../shared/data-entry.service';

@Component({
  selector: 'app-pattent',
  templateUrl: './pattent.component.html',
  styleUrls: ['./pattent.component.scss']
})
export class PattentComponent implements OnInit {

  patAchievArr: any[];
  constructor(private ds: DataEntryService) { }

  ngOnInit(): void {
    this.ds.getAchievementDataList().snapshotChanges().subscribe(item=>{
      this.patAchievArr = [];
      item.forEach(element=>{
        var x = element.payload.toJSON();
       if(x['type'] === 'Patent'){
        x["$key"] = element.key;
        this.patAchievArr.push(x);
       }
      });
    });
  }

}
