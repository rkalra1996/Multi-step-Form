import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-and-billing',
  templateUrl: './payment-and-billing.component.html',
  styleUrls: ['../../multi-step-module/multi-form/multi-form.component.css']
})
export class PaymentAndBillingComponent implements OnInit {

  step1Title : string = 'Basic Details'
  step2Title : string = 'Profile Details'
  stepTitle : string = 'Payment and Billing'
  nextUrl : string = '/404'

  constructor() { }

  ngOnInit() {
  }

}
