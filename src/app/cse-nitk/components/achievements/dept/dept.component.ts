import { Component, OnInit } from '@angular/core';
import { DataEntryService } from '../../../../shared/data-entry.service';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.scss']
})
export class DeptComponent implements OnInit {

  deptAchievArr: any[];
  constructor(private ds: DataEntryService) { }

  ngOnInit(): void {
    this.ds.getAchievementDataList().snapshotChanges().subscribe(item=>{
      this.deptAchievArr = [];
      item.forEach(element=>{
        var x = element.payload.toJSON();
       if(x['type'] === 'Department'){
        x["$key"] = element.key;
        this.deptAchievArr.push(x);
       }
      });
    });
  }

}
