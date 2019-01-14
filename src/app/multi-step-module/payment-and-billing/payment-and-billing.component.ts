import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-and-billing',
  templateUrl: './payment-and-billing.component.html',
  styleUrls: ['../../multi-step-module/multi-form/multi-form.component.css']
})
export class PaymentAndBillingComponent implements OnInit {

  step1Title : string = 'Basic Details'
  step2Title : string = 'Profile Details'
  stepTitle : string = 'Payment and Billing'

  paymentFG : FormGroup;

  constructor() { }

  ngOnInit() {
    this.paymentFG = new FormGroup({
      CardNumber : new FormControl('', [Validators.required,Validators.maxLength(16)]),
      CVV : new FormControl('', [Validators.required, Validators.maxLength(3)]),
      HolderName : new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  onSubmit() : void{
    console.log(this.paymentFG.value);
  }

}
