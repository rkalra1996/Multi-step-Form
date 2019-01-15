import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MultiStepService } from '../_services/multi-step.service';

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

  constructor(private sharedSrvc : MultiStepService) { }

  ngOnInit() {
    this.detailsFG = new FormGroup({
      FirstName : new FormControl('', [Validators.required,Validators.minLength(5)]),
      LastName : new FormControl('', [Validators.required, Validators.minLength(3)]),
      EmailID : new FormControl('', [Validators.required,Validators.maxLength(8)])
    });
  }

  onSubmit() : void{
    this.sharedSrvc.sendData(this.detailsFG.value);
  }
}
