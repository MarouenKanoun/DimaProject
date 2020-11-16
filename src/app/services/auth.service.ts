import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { Platform, AlertController, LoadingController } from '@ionic/angular';

import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { JwtHelperService } from '@auth0/angular-jwt';
//import { Storage } from '@ionic/storage';
//import { environment } from '../../environments/environment';
import { tap, catchError, map } from 'rxjs/operators';

//import { environment } from 'src/Models/environements';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://station-de-service.myestimators.com/api/auth/";
 
  user = null;
  authenticationState = new BehaviorSubject(false);


  constructor(private http: HttpClient) { }

  isAuthenticated() {
    return this.authenticationState.value;
  }



  login (data): Observable<any> {

    return this.http.post<any>(this.apiUrl , data)
      .pipe(
       tap(_ => this.authenticationState.next(true)), 
        catchError(this.handleError('login', []))
      );
      
  }

  RegisterStation(postData){
  let type='application/json;charset=UTF-8';
  let headers=new Headers({'Content-Type':type})
  let options=new RequestOptions({headers:headers});
 return this.http.post("https://station-de-service.myestimators.com/api/station/", postData, options).map(res=>
     res.json()
  ,err=>{
console.log(err);

  })



}
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      console.log(message);
    }
  }