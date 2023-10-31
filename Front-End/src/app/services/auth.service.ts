import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:4000/user';
  user = sessionStorage.getItem('email');
  

  getAll(){
    return this.http.get(this.apiUrl + '/getAll')
  }

  getByCode(code: any){
    return this.http.get(this.apiUrl + '/' + code)
  }

  proceedRegister(inputData: any){
    return this.http.post(this.apiUrl, inputData)
  }


  isLoggedIn(){
    return sessionStorage.getItem('email')!= null;
  }




}
