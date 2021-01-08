import { Component, OnInit } from '@angular/core';
import { DataEntryService } from 'src/app/shared/data-entry.service';
@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent implements OnInit {

  items = [];
  types = ["Faculty", "Adhoc", "Staff"];
  faculty = ["Head of the Department", "Professors", "Associate Professors", "Assistant Professors"];
  adhoc = ["Temporary Lecturer"];
  staff = ["Technical Staff", "Technical Officer", "Other Non-Teaching Staff", "Ministrial / administrative Staff"];

  constructor(private dbService: DataEntryService) { }

  ngOnInit(): void {
    this.dbService.getFacultiesList().snapshotChanges().subscribe(item => {
      this.items = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.items.push(x);
      })
    });
  }

}
