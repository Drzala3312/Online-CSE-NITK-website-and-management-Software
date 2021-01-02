import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataEntryService } from 'src/app/shared/data-entry.service';

@Component({
  selector: 'app-pg-list',
  templateUrl: './pg-list.component.html',
  styleUrls: ['./pg-list.component.scss']
})
export class PgListComponent implements OnInit {
  isNoData = false;
  prog = '';
  sem = '';
  category = '';
  pgProgListArr: any[];
  pgCategory;
  pgSems;
  constructor(private router:Router, private ds: DataEntryService) { }

  ngOnInit(): void {
    this.ds.getProgrammeCourseList().snapshotChanges().subscribe(item=>{
      this.pgProgListArr = [];
      item.forEach(element=>{
        var x = element.payload.toJSON();
       if(x['type'] === 'Postgraduate'){
        x["$key"] = element.key;
        this.pgProgListArr.push(x);
       }
       console.log(this.pgProgListArr);
      });
    });
    this.pgCategory = this.ds.pgCategory;
    this.pgSems = this.ds.pgSems;
  }
  onEdit(user) {
    console.log(user);
    // tslint:disable-next-line: no-unused-expression
    this.router.navigate(['/editUser', user.id]);
  }


}
