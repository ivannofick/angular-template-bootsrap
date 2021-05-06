import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {

  moduleName:string = 'Visitor';
  filter:any = {};
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
    this.loadData();
  }

  changePage(path) {
    this.router.navigate(['/' + path]);
  }


  loadData() {
    this.data = [
      {
        'site'          : 'gudang',
        'order'         : 'jjnGY75FTf',
        'customer_id'   : 'njkGF7tR',
        'customer_name' : 'Budi Nugroho',
        'description'   : 'Pembelian Sweater ',
        'price'         : '200000',
      }
    ]
  }

  doSearch() {
    
  }

  clearSearch() {

  }

  addData() {
    
  }
}
