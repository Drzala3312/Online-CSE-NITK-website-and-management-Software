import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataEntryService } from '../../../../../shared/data-entry.service';
@Component({
  selector: 'app-ug-list',
  templateUrl: './ug-list.component.html',
  styleUrls: ['./ug-list.component.scss']
})
export class UgListComponent implements OnInit {

  sem = '';
  category = '';
  ugProgListArr: any[];
  ugCategory;
  ugSems;
  constructor(private router:Router, private ds: DataEntryService) { }

  ngOnInit(): void {
    this.ds.getProgrammeCourseList().snapshotChanges().subscribe(item=>{
      this.ugProgListArr = [];
      item.forEach(element=>{
        var x = element.payload.toJSON();
       if(x['type'] === 'Undergraduate'){
        x["$key"] = element.key;
        this.ugProgListArr.push(x);
       }
      });
    });
    this.ugCategory = this.ds.ugCategory;
    this.ugSems = this.ds.ugSems;
  }
  onDetailList(courseName) {
    // tslint:disable-next-line: no-unused-expression
    localStorage.setItem('ugCourse', courseName);
    this.router.navigate(['/ug-detail']);

  }

}
