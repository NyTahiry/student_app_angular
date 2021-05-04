import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Students } from './student';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  HttpOptions= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private apiServer = "../assets/";
  constructor(private httpClient: HttpClient) { }

  create(product: any): Observable<Students>{
    return this.httpClient.post<Students>(this.apiServer + 'students.json', JSON.stringify(product), this.HttpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getById(id: any): Observable<Students> {
    return this.httpClient.get<Students>(this.apiServer + '/products/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Students[]> {
    return this.httpClient.get<Students[]>(this.apiServer + 'students.json')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: any, product: any): Observable<Students> {
    return this.httpClient.put<Students>(this.apiServer + '/products/' + id, JSON.stringify(product), this.HttpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: any){
    return this.httpClient.delete<Students>(this.apiServer + '/products/' + id, this.HttpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
