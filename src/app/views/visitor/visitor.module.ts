import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { VisitorRoutingModule } from './visitor-routing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisitorFormComponent } from './form/Visitor-form.component';
import { VisitorComponent } from './visitor.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VisitorRoutingModule,
  ],
  declarations: [
    VisitorFormComponent,
    VisitorComponent
  ],
  providers: [],
})
export class VisitorModule { }
