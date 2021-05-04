import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { Observable } from 'rxjs';
import { CrudService } from '../crud.service';
import { Students } from '../student';
import * as XLSX from 'xlsx'; 
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  students: Students[] = [];

  displayedColumns = [ 'name' , 'lastname', 'gender', 'mail', 'view' ];
  dataSource:any;

  /*name of the excel-file which will be downloaded. */ 
  fileName= 'ExcelSheet.xlsx';  

  constructor(
    public crudService: CrudService,
    private router : Router,
    private spinner : NgxSpinnerService
    ) { }

  ngOnInit() {

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    this.GetAllStudents();

  }

  GoToDetail(element : any){
    /** send data to details component */
    this.router.navigateByUrl('student/detail' ,{state:{
      data : element
    } as any});
  }

  GetAllStudents(){
    this.spinner.show();
    this.crudService.getAll().subscribe((data: Students[])=>{
      console.log(data);
      this.students = data;
      this.dataSource = this.students;
      this.spinner.hide();
    })
  }

  Exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }

}

