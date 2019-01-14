import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

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

  paymentFG : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.paymentFG = this.fb.group({
      CardNumber : new FormControl('', [Validators.required]),
      CVV : new FormControl('', [Validators.required]),
      HolderName : new FormControl('', [Validators.required])
    });
  }

  onSubmit() : void{
    console.log(this.paymentFG.value);
  }

}
