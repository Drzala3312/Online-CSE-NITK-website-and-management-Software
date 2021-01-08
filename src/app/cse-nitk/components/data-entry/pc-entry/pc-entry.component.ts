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
      dept: ['Computer Science and Engineering',Validators.required]
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
  this.ds.addProgrammeCourseEntry(this.programmeCoursesForm.value);
  alert("data added successfully!");
  this.programmeCoursesForm.reset();

}

}
