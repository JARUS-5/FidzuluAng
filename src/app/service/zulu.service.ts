import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Books } from 'src/Model/books.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { bikes } from 'src/Model/bikes.model';
import { food } from 'src/Model/food.model';
import { toys } from 'src/Model/toys.model';
import { laptops } from 'src/Model/laptops.model';
import { dvds } from 'src/Model/dvds.model';

@Injectable({
  providedIn: 'root'
})
export class ZuluService {

  constructor(private http: HttpClient) { }
  booksList:Books[]=[];
  private urlBooksIndia = 'http://localhost:3022/gatewayB/books/all/India';
  private urlBooksUsa= 'http://localhost:3022/gatewayB/books/all/USA';

  private urlBikesIndia = 'http://localhost:3021/gatewayA/bike/all/India';
  private urlBikesUsa= 'http://localhost:3021/gatewayA/bike/all/USA';

  private urlFoodsIndia = 'http://localhost:3021/gatewayA/food/all/India';
  private urlFoodsUsa= 'http://localhost:3021/gatewayA/food/all/USA';

  private urlToysIndia = 'http://localhost:3021/gatewayA/toys/all/India';
  private urlToysUsa= 'http://localhost:3021/gatewayA/toys/all/Usa';

  private urlLaptopIndia = 'http://localhost:3022/gatewayB/laptops/all/India';
  private urlLaptopUsa= 'http://localhost:3022/gatewayB/laptops/all/USA';

  private urlDvdsIndia = 'http://localhost:3022/gatewayB/dvds/all/India';
  private urlDvdsUsa= 'http://localhost:3022/gatewayB/dvds/all/USA';


  getBooks(country:string): Observable<Books[]> {
    if(country=="I")
      return this.http.get<Books[]>(this.urlBooksIndia);
    else(country=="U")
      return this.http.get<Books[]>(this.urlBooksUsa);
  }

  getBikes(country:string): Observable<bikes[]> {
    if(country=="I")
      return this.http.get<bikes[]>(this.urlBikesIndia);
    else(country=="U")
      return this.http.get<bikes[]>(this.urlBikesUsa);
  }

  getFood(country:string): Observable<food[]> {
    if(country=="I")
      return this.http.get<food[]>(this.urlFoodsIndia);
    else(country=="U")
      return this.http.get<food[]>(this.urlFoodsUsa);
  }

  getToys(country:string): Observable<toys[]> {
    if(country=="I")
      return this.http.get<toys[]>(this.urlToysIndia);
    else(country=="U")
      return this.http.get<toys[]>(this.urlToysUsa);
  }

  getLaptops(country:string): Observable<laptops[]> {
    if(country=="I")
      return this.http.get<laptops[]>(this.urlLaptopIndia);
    else(country=="U")
      return this.http.get<laptops[]>(this.urlLaptopUsa);
  }

  getDvds(country:string): Observable<dvds[]> {
    if(country=="I")
      return this.http.get<dvds[]>(this.urlDvdsIndia);
    else(country=="U")
      return this.http.get<dvds[]>(this.urlDvdsUsa);
  }







  handleError(err: HttpErrorResponse){

    if(err.error instanceof ErrorEvent){
      console.error(`the error is as follows: ${err.error}`);
    }
    else{
      console.error(`the server returned error code ${err.status} which said ${err.error}`);

    }

  return throwError("unble to reach server , please try again");
}

 
}
function catchError(arg0: any): any {
  throw new Error('Function not implemented.');
}

