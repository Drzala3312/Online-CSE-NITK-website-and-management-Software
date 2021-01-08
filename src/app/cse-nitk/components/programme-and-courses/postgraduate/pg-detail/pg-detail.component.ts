import { Component, OnInit } from '@angular/core';
import { DataEntryService } from '../../../../../shared/data-entry.service';
@Component({
  selector: 'app-pg-detail',
  templateUrl: './pg-detail.component.html',
  styleUrls: ['./pg-detail.component.scss']
})
export class PgDetailComponent implements OnInit {

  constructor(private ds: DataEntryService) { }
  pgProgram: any;
  ngOnInit(): void {
    const courseName = localStorage.getItem('pgCourse');
    this.ds.getProgrammeCourseList().snapshotChanges().subscribe(item=>{

      item.forEach(element=>{
        var x = element.payload.toJSON();
       if(x['type'] === 'Postgraduate' && x['courseName'] === courseName){
        x["$key"] = element.key;
        this.pgProgram = x;
       }
      });
    });
  }

}
