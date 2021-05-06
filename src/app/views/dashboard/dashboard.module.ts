import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { DashboardRoutingModule } from './dashboard-routing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/tools/material.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardFormComponent } from './form/dashboard-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  declarations: [
    DashboardComponent,
    DashboardFormComponent
  ],
  providers: [],
})
export class DashboardModule { }
