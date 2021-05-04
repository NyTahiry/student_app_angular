import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student';

  isDetail: boolean = false ;

  constructor( private router: Router){ }

  ngOnInit(): void {
    this.DetectRoute()
  }

  DetectRoute(){
    if(this.router.url != 'home'){
      this.isDetail = true;
      console.log(this.isDetail);
      
    }
  }


}
