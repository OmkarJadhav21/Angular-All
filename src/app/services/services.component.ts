import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor( private ser:DataserviceService,
              private router:Router) { }

  ngOnInit() {
  }
  // onSubmit(name,pass){
  //   this.ser.onLogin(name,pass)}
  
  onSubmit(name,pass){
    this.ser.onLogin(name,pass).subscribe(
      data=>{
        if(data['Login']=="Success"){
          console.log("Login Success")
          this.router.navigate(['logedin'])
        }else{
          console.log("Login Fail  !!!")
          this.router.navigate(['Service'])}
      
        
      }
    )

  }
}
