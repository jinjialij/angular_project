import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Account } from './models/account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    printToConsole(arg){console.log(arg);}

    constructor(private http:HttpClient) { }
        
    login(account:Account){
      return this.http.post("/api/login/", account);
    }

    register(account:Account) {
      return this.http.post("/api/register/", account);
    }
}
