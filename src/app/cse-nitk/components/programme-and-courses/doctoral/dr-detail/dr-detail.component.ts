import { Component, OnInit } from '@angular/core';
import { DataEntryService } from '../../../../../shared/data-entry.service';

@Component({
  selector: 'app-dr-detail',
  templateUrl: './dr-detail.component.html',
  styleUrls: ['./dr-detail.component.scss']
})
export class DrDetailComponent implements OnInit {

  constructor(private ds: DataEntryService) { }
  drProgram: any;
  ngOnInit(): void {
    const courseName = localStorage.getItem('drCourse');
    this.ds.getProgrammeCourseList().snapshotChanges().subscribe(item=>{

      item.forEach(element=>{
        var x = element.payload.toJSON();
       if(x['type'] === 'Doctoral' && x['courseName'] === courseName){
        x["$key"] = element.key;
        this.drProgram = x;
       }
      });
    });
  }

}
