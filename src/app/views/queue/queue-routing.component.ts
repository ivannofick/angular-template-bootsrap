import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueueComponent } from './queue.component';
import { CetakNoUrutComponent } from './cetak-no-urut/cetak-no-urut.component';

const routes: Routes = [
  {
    path: '',
    component: QueueComponent
  },
  {
    path: 'cetak/no/urut',
    component: CetakNoUrutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueueRoutingModule {}
