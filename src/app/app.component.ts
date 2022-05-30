import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gender-Predict';
  btnState = true;
  btnName = 'Predict';
  ResName = "";
  ResGender = "";
  ResBox = false;
  ResNull = false;
  ResOk = false;

  form = new FormGroup({
    name: new FormControl(null, Validators.required)
  })

  constructor(private api: ApiService) { }

  resetall() {
    this.btnState = true;
    this.btnName = 'Predict';
    this.ResName = "";
    this.ResGender = "";
    this.ResBox = false;
    this.ResNull = false;
    this.ResOk = false;
  }


  getGender() {
    this.btnState = false;
    this.btnName = "Please Wait...";
    this.api.Predict(this.form.value).subscribe((res: any) => {
      if (res.gender == null) {
        this.ResNull = true;
        this.ResBox = true;
        this.ResName = res.name
        this.btnState = true;
        this.btnName = "Predict"
        this.form.reset()
      } else {
        if (res.gender == 'female') {
          this.ResGender = 'Female 👧';
        }
        if (res.gender == 'male') {
          this.ResGender = 'Male 👦';
        }
        this.ResName = res.name
        this.ResOk = true;
        this.ResBox = true;
        this.btnState = true;
        this.btnName = "Predict"
        this.form.reset()
      }

    })
  }
}
