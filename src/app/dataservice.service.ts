import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import{Http}from '@angular/http'
import { LoginService } from './login.service';

@Injectable()
export class DataserviceService {
private qwerty=false
  constructor( private router:Router,
              private http:Http,
              private login:LoginService) { }
  onLogin(name,pass){
   return this.http.get(`http://localhost:8080/get/${name}/${pass}`).subscribe(res => {
    console.log(res['_body']);
    if(res['_body']=="success"){
    this.router.navigate(['logedin'])
    }    
    else this.router.navigate(['Service'])
    }) 
  }
  onLogin1(){
    return true;
  }
}
