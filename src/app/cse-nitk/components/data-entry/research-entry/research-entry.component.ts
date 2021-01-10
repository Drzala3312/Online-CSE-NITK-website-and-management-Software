import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataEntryService } from 'src/app/shared/data-entry.service';
@Component({
  selector: 'app-research-entry',
  templateUrl: './research-entry.component.html',
  styleUrls: ['./research-entry.component.scss']
})
export class ResearchEntryComponent implements OnInit {
  types = ['Research', 'Consultancy'];
  isUpdate = false;
  key = '';
  projectList: any[];
  pageOfItems: Array<any>;
  consultancyListArr: any[];
  displayedColumns: string[] = ['id', 'toc', 'guide', 'fundingAgency', 'student', 'status', 'yr','action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private formbuilder: FormBuilder,
    private ds: DataEntryService) { }
  public researchform: FormGroup;
  typeValue = '';
  ngOnInit(): void {
    this.researchform = this.formbuilder.group({
      type: ['', Validators.required],
      consultancy: [''],
      guide: [''],
      agency: [''],
      namestudent: [''],
      status: [''],
      year: [''],
      content: ['']
    });

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
  onChange(event) {
    this.typeValue = event.target.value;
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

  clearData(){
    this.researchform.reset();
    this.isUpdate= false;
    this.key = '';
  }
  onSubmit() {
    if(this.isUpdate&&this.key!==""){
      this.ds.editresearchDataEntry(this.key,this.researchform.value);
    }
    else{
      this.ds.addresearchDataEntry(this.researchform.value)
    }
    alert("data added successfully!");
    this.researchform.reset();

  }

  editResearch(entry){
    this.isUpdate = true;
    this.key = entry.$key;
    this.typeValue = entry.type;
    this.researchform.setValue(entry);
  }
  deleteResearch(key){
    this.ds.removeProgrammeCourseEntry(key);
  }


}
