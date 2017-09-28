import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor( private ser:DataserviceService) { }

  ngOnInit() {
  }
  onSubmit(name,pass){
    this.ser.onLogin(name,pass);

  }
}
