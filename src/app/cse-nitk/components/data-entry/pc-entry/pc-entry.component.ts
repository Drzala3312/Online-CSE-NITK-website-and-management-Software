import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataEntryService } from 'src/app/shared/data-entry.service';
@Component({
  selector: 'app-pc-entry',
  templateUrl: './pc-entry.component.html',
  styleUrls: ['./pc-entry.component.scss']
})
export class PcEntryComponent implements OnInit {


  public programmeCoursesForm: FormGroup;
  typeValue='Postgraduate';
  types;
  ugCategory;
  pgCategory;
  ugSems;
  pgSems;
  isUpdate=false;
  key = '';
  pgProgListArr: any[];
  ugProgListArr: any[];
  drProgListArr: any[];
  constructor(
    private formbuilder: FormBuilder,
    private ds: DataEntryService) { }

  ngOnInit(): void {
    this.programmeCoursesForm = this.formbuilder.group({
      type: ['',Validators.required],
      courseName: ['',Validators.required],
      programme: [''],
      sem: [''],
      category: [''],
      credits: ['',Validators.required],
      content: ['',Validators.required],
      ref: ['',Validators.required],
      $key: [''],
      dept: ['Computer Science and Engineering',Validators.required]
    });

    this.ds.getProgrammeCourseList().snapshotChanges().subscribe(item=>{
      this.pgProgListArr = [];
      item.forEach(element=>{
        var x = element.payload.toJSON();
        if(x['type'] === 'Postgraduate'){
        x["$key"] = element.key;
        this.pgProgListArr.push(x);
       }
      });
    });
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
    this.types = this.ds.types;
    this.ugCategory = this.ds.ugCategory;
    this.pgCategory = this.ds.pgCategory;
    this.ugSems = this.ds.ugSems;
    this.pgSems = this.ds.pgSems;


  }

onChange(event) {
  this.typeValue = event.target.value;
}
editPC(entry){
  this.isUpdate = true;
  this.key = entry.$key;
  this.typeValue = entry.type;
  this.programmeCoursesForm.setValue(entry);
}
deletePc(key){
  this.ds.removeProgrammeCourseEntry(key);
}

onSubmit() {
  if(this.typeValue==='Undergraduate'){
    this.programmeCoursesForm.patchValue({
      programme: 'B.Tech (CSE)'
    })
  }else if(this.typeValue==='Doctoral'){
    this.programmeCoursesForm.patchValue({
      programme: 'Ph.D'
    })
  }
  if(this.isUpdate && this.key !==''){
    this.ds.editProgrammeCourseEntry(this.programmeCoursesForm.value,this.key);
  }else {

    this.ds.addProgrammeCourseEntry(this.programmeCoursesForm.value);
  }
  alert("data added successfully!");
  this.programmeCoursesForm.reset();

}

}
