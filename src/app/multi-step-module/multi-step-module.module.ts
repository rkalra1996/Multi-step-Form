import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiStepModuleRoutingModule } from './multi-step-module-routing.module';
import { MultiFormComponent } from './multi-form/multi-form.component';
import { NotFound404Component } from './_server-error-components/not-found404/not-found404.component';
import { PaymentAndBillingComponent } from './payment-and-billing/payment-and-billing.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';

@NgModule({
  imports: [
    CommonModule,
    MultiStepModuleRoutingModule
  ],
  declarations: [
    MultiFormComponent, 
    NotFound404Component, PaymentAndBillingComponent, ProfileInformationComponent
  ],
  exports : [
    CommonModule,
    FormsModule,
    MultiFormComponent,
    MultiStepModuleRoutingModule
  ]
})
export class MultiStepModuleModule { }
