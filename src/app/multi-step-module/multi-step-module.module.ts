import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiStepModuleRoutingModule } from './multi-step-module-routing.module';
import { MultiFormComponent } from './multi-form/multi-form.component';
import { NotFound404Component } from './_server-error-components/not-found404/not-found404.component';

@NgModule({
  imports: [
    CommonModule,
    MultiStepModuleRoutingModule
  ],
  declarations: [
    MultiFormComponent, 
    NotFound404Component
  ],
  exports : [
    CommonModule,
    FormsModule,
    MultiFormComponent,
    MultiStepModuleRoutingModule
  ]
})
export class MultiStepModuleModule { }
