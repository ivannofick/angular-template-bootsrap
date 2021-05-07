import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueRoutingModule } from './queue-routing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueueComponent } from './queue.component';
import { NgxBarcode6Module } from 'ngx-barcode6';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QueueRoutingModule,
    NgxBarcode6Module 
  ],
  declarations: [
    QueueComponent
  ],
  providers: [],
})
export class QueueModule { }
