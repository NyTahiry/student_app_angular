
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

   element: any;
   datas: any;
  private state$: Observable<any> | undefined;​

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }
  ngOnInit(): void {

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
    /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    /**receive data from home*/ 
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state))​;                  
    this.state$.subscribe(data => {
      this.element = data;
      this.datas = this.element.data;
      console.log(this.element.data);
    });
    
  }

  GoHome(){
    this.router.navigate(['home']);
  }

}
