import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DataEntryService } from 'src/app/shared/data-entry.service';

@Component({
  selector: 'app-faculties-entry',
  templateUrl: './faculties-entry.component.html',
  styleUrls: ['./faculties-entry.component.scss']
})
export class FacultiesEntryComponent implements OnInit {

  public facultiesForm: FormGroup;
  facultiesList: AngularFireList<any>;

  types = ["Faculty", "Adhoc", "Staff"];
  faculty = ["Head of the Department", "Professors", "Associate Professors", "Assistant Professors"];
  adhoc = ["Temporary Lecturer"];
  staff = ["Technical Staff", "Technical Officer", "Other Non-Teaching Staff", "Ministrial / administrative Staff"];
  typeValue: string;

  reader;
  image: any;
  items = [];

  constructor(private formBuilder: FormBuilder,
    private db: AngularFireDatabase,
    private dbService: DataEntryService) { }

  ngOnInit(): void {
    this.facultiesForm = this.formBuilder.group({
      type: ['', Validators.required],
      designation: ['', Validators.required],
      name: ['', Validators.required],
      fileSource: ['', Validators.required],
    });

    this.dbService.getFacultiesList().snapshotChanges().subscribe(item => {
      this.items = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.items.push(x);
      })
    });
  }

  onChange(event) {
    this.typeValue = event.target.value;
  }

  onSubmit() {
    this.dbService.addFaculties(this.facultiesForm.value);
    this.image = this.facultiesForm.value.fileSource;
  }

  selectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.reader = new FileReader();
      this.reader.readAsDataURL(event.target.files[0]);

      this.reader.onload = (event) => { // called once readAsDataURL is completed
        this.facultiesForm.patchValue({
          fileSource: event.target.result,
        });
      };
    }
  }

  deleteFaculties(key) {
    if (confirm('Are you Sure!')) {
      this.dbService.deleteFaculties(key);
    }
  }
}
