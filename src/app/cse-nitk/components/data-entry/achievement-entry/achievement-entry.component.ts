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
  achievArr: any[];
  types: string[] = ['Department','Student','Patent'];
  isUpdate= false;
  constructor(private formbuilder: FormBuilder,
    private ds: DataEntryService) { }


  ngOnInit(): void {
    this.achievementForm = this.formbuilder.group({
      type: ['',Validators.required],
      content: ['',Validators.required]
    });
    this.ds.getAchievementDataList().snapshotChanges().subscribe(item=>{
      this.achievArr = [];
      item.forEach(element=>{
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.achievArr.push(x);

      });
    });
  }
  onSubmit() {
    this.ds.addAchievementDataEntry(this.achievementForm.value);
    alert("data added successfully!");
    this.achievementForm.reset();
  }

  clearData(){
    this.isUpdate=false;
    this.achievementForm.reset();
  }
  editAchieve(item){
    this.isUpdate = true;
    this.achievementForm = item;
  }

  deleteAchieve(key){
    this.ds.deleteAchievementDataEntry(key);
  }

}
