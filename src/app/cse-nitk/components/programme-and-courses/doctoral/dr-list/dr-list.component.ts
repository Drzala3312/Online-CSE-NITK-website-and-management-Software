import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataEntryService } from '../../../../../shared/data-entry.service';

@Component({
  selector: 'app-dr-list',
  templateUrl: './dr-list.component.html',
  styleUrls: ['./dr-list.component.scss']
})
export class DrListComponent implements OnInit {
  drProgListArr: any[];
  constructor(private router:Router, private ds: DataEntryService) { }

  ngOnInit(): void {
    this.ds.getProgrammeCourseList().snapshotChanges().subscribe(item=>{
      this.drProgListArr = [];
      item.forEach(element=>{
        var x = element.payload.toJSON();
       if(x['type'] === 'Doctoral'){
        x["$key"] = element.key;
        this.drProgListArr.push(x);
       }
      });
    });
  }

  onDetailList(courseName) {
    // tslint:disable-next-line: no-unused-expression
    localStorage.setItem('drCourse', courseName);
    this.router.navigate(['/dr-detail']);

  }

}
