import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataEntryService } from 'src/app/shared/data-entry.service';

@Component({
  selector: 'app-date-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit {

  isAuthenticated;
  invalid = false;
  items = [];
  constructor(private ds:DataEntryService) { 
    this.isAuthenticated = false;
  }

  ngOnInit(): void {
    if(localStorage.getItem('User') != null){
      this.isAuthenticated = true;
    }
  }

  login(uname,pwd){
    if(uname.value.trim() == '' || pwd.value.trim() == '')
    {
      this.invalid = true;
    }
    else{
      this.ds.getUser().snapshotChanges().subscribe(item=>{
        this.items = [];
        item.forEach(element => {
          var x = element.payload.toJSON();
          x["$key"] = element.key;
          if(x["username"] == uname.value && x["password"] == pwd.value){
            this.isAuthenticated = true;
            localStorage.setItem('User',x["$key"]);
          }
          this.items.push(x);
        })
        if(this.isAuthenticated == false)
        {
          this.invalid = true;
        }
      });

      this.invalid = false;
    }
  }

  logout(){
    localStorage.removeItem('User');
    this.isAuthenticated = false;
  }
}
