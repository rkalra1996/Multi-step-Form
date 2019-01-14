import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiFormComponent } from './multi-form/multi-form.component';
import { NotFound404Component } from './_server-error-components/not-found404/not-found404.component';

const routes: Routes = [
  {
    path: '',
    component: MultiFormComponent
  },
  {
    path: '404',
    component: NotFound404Component
  },
  {
    path: '**',
    component : NotFound404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiStepModuleRoutingModule { }
