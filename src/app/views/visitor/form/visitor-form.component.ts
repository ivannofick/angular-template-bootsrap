import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.css']
})
export class VisitorFormComponent implements OnInit {

  moduleName:string = 'Form Visitor';
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
