import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
