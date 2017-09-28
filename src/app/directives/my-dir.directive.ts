import { Directive, ElementRef, Renderer2, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {

  constructor(private elref:ElementRef,
              private right :Renderer2) 
    { 
    // this.elref.nativeElement.style.color="red",          //this is wrong way
    this.right.setStyle(this.elref.nativeElement,"color",'green')
   }

@Input('appMyDir')
   @HostBinding('style.border')
   brd:string
@HostListener('mouseenter')
onEnter(){
  this.brd='2px solid red'
}
@HostListener('mouseleave')
onLeave(){
  this.brd=null;
}

}
