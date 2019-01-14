import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['../../multi-step-module/multi-form/multi-form.component.css']
})
export class ProfileInformationComponent implements OnInit {

  step1Title : string = 'Basic Details'
  stepTitle : string = 'Profile Details'
  step3Title : string = 'Payment and Billing'
  nextUrl : string = '/step3'
  detailsFG : FormGroup;

  constructor() { }

  ngOnInit() {
    this.detailsFG = new FormGroup({
      FirstName : new FormControl('', [Validators.required,Validators.maxLength(16)]),
      LastName : new FormControl('', [Validators.required, Validators.minLength(5)]),
      EmailID : new FormControl('', [Validators.required,Validators.maxLength(16)])
    });
  }

  onSubmit() : void{
    console.log(this.detailsFG.value);
  }
}
