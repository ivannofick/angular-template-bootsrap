import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  changePage(path) {
    this.router.navigate(['/' + path]);
  }

  doSearch() {
    
  }

  clearSearch() {

  }

  addData() {
    
  }
}
