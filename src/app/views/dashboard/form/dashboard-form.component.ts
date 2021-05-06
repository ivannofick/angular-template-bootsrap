import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-form',
  templateUrl: './dashboard-form.component.html',
  styleUrls: ['./dashboard-form.component.css']
})
export class DashboardFormComponent implements OnInit {

  moduleName:string = 'Dashboard';
  form: any = {};
  showList = false;
  onValidate = false;
  loading = false;

  /**
   * Pagination for Master Data
   */
  protected pageSize = 10;
  protected currentPage = 1;
  protected totalItems = 0;

  data:any = [];


  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Save / Update Data
   *
   *
   */
   saveData(value, valid){

  }

}
