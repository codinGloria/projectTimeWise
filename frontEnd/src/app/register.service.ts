import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http :   HttpClient) { }

  public loginUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("localhost:8080/login", user)
  }
}
