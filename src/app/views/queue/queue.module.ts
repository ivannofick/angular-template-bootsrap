import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueRoutingModule } from './queue-routing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueueComponent } from './queue.component';
import { CetakNoUrutComponent } from './cetak-no-urut/cetak-no-urut.component';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QueueRoutingModule,
    NgxBarcodeModule 
  ],
  declarations: [
    QueueComponent,
    CetakNoUrutComponent
  ],
  providers: [],
})
export class QueueModule { }
