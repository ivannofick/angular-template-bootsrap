import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { VisitorComponent } from './views/visitor/visitor.component';
import { TutorialComponent } from './views/tutorial/tutorial.component';
import { DashboardFormComponent } from './views/dashboard/form/dashboard-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },  
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./views/tutorial/tutorial.module').then(m => m.TutorialModule),
  },
  {
    path: 'visitor',
    loadChildren: () => import('./views/visitor/visitor.module').then(m => m.VisitorModule),
  },

  {
    path: 'queue',
    loadChildren: () => import('./views/queue/queue.module').then(m => m.QueueModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
