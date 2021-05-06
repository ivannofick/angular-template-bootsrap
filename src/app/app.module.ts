import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './tools/material.module';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DashboardFormComponent } from './views/dashboard/form/dashboard-form.component';
import { VisitorComponent } from './views/visitor/visitor.component';
import { FormsModule } from '@angular/forms';
import { TutorialComponent } from './views/tutorial/tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
