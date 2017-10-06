import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import{Http}from '@angular/http'
import { LoginService } from './login.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DataserviceService {
private qwerty=false
  constructor( private router:Router,
              private http:Http,
              private login:LoginService) { }
  // onLogin(name,pass){
  //  return this.http.get(`http://localhost:8080/getValues/${name}/${pass}`).subscribe(res => {
  //   console.log(res['_body']);
  //   if(res['_body']=="success"){
  //   this.router.navigate(['logedin'])
  //   }    
  //   else this.router.navigate(['Service'])
  //   }) 
  // }

  onLogin(name,pass):Observable<Response>{
    return this.http.get(
          `http://localhost:8080/getmydata/${name}/${pass}`).map(data=>data.json())
  }
  onLogin1(){
    return true;
  }
}
