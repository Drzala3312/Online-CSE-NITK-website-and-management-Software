import { Component, OnInit } from '@angular/core';
import { DataEntryService } from '../../../../../shared/data-entry.service';

@Component({
  selector: 'app-ug-detail',
  templateUrl: './ug-detail.component.html',
  styleUrls: ['./ug-detail.component.scss']
})
export class UgDetailComponent implements OnInit {

  constructor(private ds: DataEntryService) { }
  ugProgram: any;
  ngOnInit(): void {
    const courseName = localStorage.getItem('ugCourse');
    this.ds.getProgrammeCourseList().snapshotChanges().subscribe(item=>{

      item.forEach(element=>{
        var x = element.payload.toJSON();
       if(x['type'] === 'Undergraduate' && x['courseName'] === courseName){
        x["$key"] = element.key;
        this.ugProgram = x;
       }
      });
    });
  }
}
