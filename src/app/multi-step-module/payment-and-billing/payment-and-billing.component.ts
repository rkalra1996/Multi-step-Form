import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MultiStepService } from '../_services/multi-step.service';
import { getViewData } from '@angular/core/src/render3/instructions';
import { Observable } from 'rxjs';

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

  constructor(private sharedSrvc : MultiStepService) { }

  ngOnInit() {
    this.paymentFG = new FormGroup({
      CardNumber : new FormControl('', [Validators.required,Validators.minLength(16)]),
      CVV : new FormControl('', [Validators.required]),
      HolderName : new FormControl('', [Validators.required, Validators.minLength(4)])
    });
    
    this.getViewData().subscribe(data => {
      console.log("data recieved in billing is ", data);
  });
  }
  onSubmit() : void {
    this.sharedSrvc.sendData(this.paymentFG.value);
  }

  getViewData(): Observable<object> {
    return this.sharedSrvc.getData();
    }
}
