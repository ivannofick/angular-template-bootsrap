import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorComponent } from './visitor.component';
import { VisitorFormComponent } from './form/Visitor-form.component';

const routes: Routes = [
  {
    path: '',
    component: VisitorComponent
  },
  {
    path: 'add',
    component: VisitorFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule {}
