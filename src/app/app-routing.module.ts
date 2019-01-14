import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { MultiStepModuleRoutingModule } from './multi-step-module/multi-step-module-routing.module';

const routes: Routes = [
  {
    path: "",
    loadChildren : "../app/multi-step-module/multi-step-module.module.ts#MultiStepModuleModule"
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MultiStepModuleRoutingModule,
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
