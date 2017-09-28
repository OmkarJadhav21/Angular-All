import { Component, OnInit } from '@angular/core';
import {MyDirDirective} from './my-dir.directive';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
x:boolean
  constructor() { }
private type:string="Structural Directives"
private type2:string="Attribute Directives"
  ngOnInit() {
  }

TypeChng(){
this.x=!this.x
  }
  etxt={'color':"red"}
 tamuk=[
   "Watch",
   "Mobile",
   "quaterd",
   "einstein",
   "Emanuaala"
 ];
}
