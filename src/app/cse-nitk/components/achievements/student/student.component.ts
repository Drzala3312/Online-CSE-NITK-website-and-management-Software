import { Component, OnInit } from '@angular/core';
import { DataEntryService } from '../../../../shared/data-entry.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  stdAchievArr: any[];
  constructor(private ds: DataEntryService) { }

  ngOnInit(): void {
    this.ds.getAchievementDataList().snapshotChanges().subscribe(item=>{
      this.stdAchievArr = [];
      item.forEach(element=>{
        var x = element.payload.toJSON();
       if(x['type'] === 'Student'){
        x["$key"] = element.key;
        this.stdAchievArr.push(x);
       }
      });
    });
  }

}
