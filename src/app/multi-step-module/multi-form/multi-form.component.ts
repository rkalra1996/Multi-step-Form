import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MultiStepService } from '../_services/multi-step.service';

@Component({
  selector: 'app-multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.css']
})
export class MultiFormComponent implements OnInit {

  stepTitle : string = 'Basic Details'
  step2Title : string = 'Profile Details'
  step3Title : string = 'Payment and Billing'
  nextUrl : string = '/step2'
  multiFG : FormGroup;

  constructor(private sharedSrvc : MultiStepService) { }

  ngOnInit() {
    this.multiFG = new FormGroup({
      TotalItems : new FormControl('', [Validators.required,Validators.maxLength(16)]),
      ShippingAddr : new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  onSubmit() : void{
    this.sharedSrvc.sendData(this.multiFG.value);
  }
}
