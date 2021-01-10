import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataEntryService } from '../../../../shared/data-entry.service';
@Component({
  selector: 'app-consultancy',
  templateUrl: './consultancy.component.html',
  styleUrls: ['./consultancy.component.scss']
})
export class ConsultancyComponent implements OnInit {

  displayedColumns: string[] = ['id', 'toc', 'guide', 'fundingAgency', 'student', 'status', 'yr'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  constructor(private ds: DataEntryService) { }
  consultancyListArr: any[];
  ngOnInit(): void {
    this.ds.getresearchDataList().snapshotChanges().subscribe(item => {
      this.consultancyListArr = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        if (x['type'] === 'Consultancy') {
          x["$key"] = element.key;
          this.consultancyListArr.push(x);
        }
      });
    });
    this.dataSource = new MatTableDataSource(this.consultancyListArr);
    this.dataSource.sort = this.sort;
  }

}
