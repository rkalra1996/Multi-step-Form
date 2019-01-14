import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
