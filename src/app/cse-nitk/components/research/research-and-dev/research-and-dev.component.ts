import { Component, OnInit } from '@angular/core';
import { DataEntryService } from '../../../../shared/data-entry.service';

@Component({
  selector: 'app-research-and-dev',
  templateUrl: './research-and-dev.component.html',
  styleUrls: ['./research-and-dev.component.scss']
})
export class ResearchAndDevComponent implements OnInit {

  projectList: any[];
  constructor(private ds: DataEntryService) { }

  ngOnInit(): void {
    this.ds.getresearchDataList().snapshotChanges().subscribe(item=>{
      this.projectList = [];
      item.forEach(element=>{
        var x = element.payload.toJSON();
       if(x['type'] === 'Research'){
        x["$key"] = element.key;
        this.projectList.push(x);
       }
      });
    });
  }

}
