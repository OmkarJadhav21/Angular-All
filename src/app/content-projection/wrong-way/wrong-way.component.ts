import { Component, OnInit, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-wrong-way',
  templateUrl: './wrong-way.component.html',
  styleUrls: ['./wrong-way.component.css']
})
export class WrongWayComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }
  private xy:String
  @ViewChild('myref')
  private pppp:ElementRef
  withFun(){
  this.xy=this.pppp.nativeElement.value;
  }
  private ch:string
  @ContentChild('cnt')
  private cnt:ElementRef
  cntChild(){
    this.ch=this.cnt.nativeElement.value;
  }     
    
}
