import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cetak-no-urut',
  templateUrl: './cetak-no-urut.component.html',
  styleUrls: ['./cetak-no-urut.component.css']
})
export class CetakNoUrutComponent implements OnInit {

  moduleName:string = 'queue';
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

  ngOnInit(): void {}

  changePage(path) {
    this.router.navigate(['/' + path]);
  }


  openPrint() {
    console.log('masuk');
    // var newWin = window.open('', 'Print-Window');
    window.print();
  }

}
