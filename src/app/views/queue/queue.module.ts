import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { QueueRoutingModule } from './queue-routing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueueComponent } from './queue.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QueueRoutingModule,
  ],
  declarations: [
    QueueComponent
  ],
  providers: [],
})
export class QueueModule { }
