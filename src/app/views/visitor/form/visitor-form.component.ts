import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Speech from 'speak-tts' // es6

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

  openKarcis(event) {
    event.preventDefault();
    const speech = new Speech();
    speech.init({
        'volume': 1,
            'lang': 'id-ID',
            'rate': 3,
            'pitch': 2,
            'voice':'Google UK English Male',
            'splitSentences': true,
            'listeners': {
                'onvoiceschanged': (voices) => {
                    console.log("Event voiceschanged", voices)
                }
            }
    });
    speech.speak({
        text: 'Nomer Antrian Tiga Puluh Sembilan',
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    })
  }


}
