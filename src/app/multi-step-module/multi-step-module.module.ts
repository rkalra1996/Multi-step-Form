import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiStepModuleRoutingModule } from './multi-step-module-routing.module';
import { MultiFormComponent } from './multi-form/multi-form.component';

@NgModule({
  imports: [
    CommonModule,
    MultiStepModuleRoutingModule
  ],
  declarations: [MultiFormComponent],
  exports : [
    CommonModule,
    FormsModule,
    MultiFormComponent,
    MultiStepModuleRoutingModule
  ]
})
export class MultiStepModuleModule { }
