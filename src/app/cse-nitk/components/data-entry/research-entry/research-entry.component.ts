
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataEntryService } from 'src/app/shared/data-entry.service';
@Component({
  selector: 'app-research-entry',
  templateUrl: './research-entry.component.html',
  styleUrls: ['./research-entry.component.scss']
})
export class ResearchEntryComponent implements OnInit {
  types = ['Research', 'Consultancy'];
  constructor(
    private formbuilder: FormBuilder,
    private ds: DataEntryService) { }
  public researchform: FormGroup;
  typeValue='Research';
  ngOnInit(): void {
    this.researchform = this.formbuilder.group({
      type: ['',Validators.required],
      consultancy: [''],
      guide: [''],
      agency: [''],
      namestudent: [''],
      status: [''],
      year: [''],
      content: ['']
    });
  }
  onChange(event) {
    this.typeValue = event.target.value;
  }
  onSubmit() {
    this.ds.addresearchDataEntry(this.researchform.value)
    alert("data added successfully!");
    this.researchform.reset();

  }

}
