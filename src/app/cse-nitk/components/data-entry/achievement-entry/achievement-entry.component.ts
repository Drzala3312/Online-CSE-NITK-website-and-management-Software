import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataEntryService } from 'src/app/shared/data-entry.service';

@Component({
  selector: 'app-achievement-entry',
  templateUrl: './achievement-entry.component.html',
  styleUrls: ['./achievement-entry.component.scss']
})
export class AchievementEntryComponent implements OnInit {
  public achievementForm: FormGroup;
  types: string[] = ['Department','Student','Patent']
  constructor(private formbuilder: FormBuilder,
    private ds: DataEntryService) { }


  ngOnInit(): void {
    this.achievementForm = this.formbuilder.group({
      type: ['',Validators.required],
      content: ['',Validators.required]
    });
  }
  onSubmit() {
    this.ds.addAchievementDataEntry(this.achievementForm.value);
    alert("data added successfully!");
    this.achievementForm.reset();

  }

}
