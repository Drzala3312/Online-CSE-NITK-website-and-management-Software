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
  key;
  pageOfItems: Array<any>;
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
  //Edit icon event
  editAchieve(item,content,select){
    this.isUpdate = true;
    //this.achievementForm = item;
    content.value = item.content;
    select.value = item.type;
    this.key = item.$key;
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
  //Update in database
  updateAchieve(content,select){
    var item = {
      content: content.value,
      type: select.value
    }
    this.ds.editAchievementDataEntry(this.key,item);
    this.clearData();
  }
  deleteAchieve(key){
    this.ds.deleteAchievementDataEntry(key);
  }

}
