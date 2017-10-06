import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(private myRoute:Router ) { }

  ngOnInit() {
  }
  toggleSidebar(){
    
      document.getElementById("sidebar").classList.toggle('active');
    }
  compo(tp:String){
    switch(tp){
      case "1" :this.myRoute.navigate(['Compo'])
      document.getElementById("sidebar").classList.toggle('active');
      break;

      case "2" :this.myRoute.navigate(['Direc'])
      document.getElementById("sidebar").classList.toggle('active');
      break;

      case "3" :this.myRoute.navigate(['content'])
      document.getElementById("sidebar").classList.toggle('active');
      break;

      case "4" :this.myRoute.navigate(['Pipes'])
      document.getElementById("sidebar").classList.toggle('active');
      break;
      case "5" :this.myRoute.navigate(['Service'])
      document.getElementById("sidebar").classList.toggle('active');
      break;
      
    }
    }
}
