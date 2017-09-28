import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustStrDir]'
})

export class CustStrDirDirective {
  @Input()
  appCustStrDir :boolean
  constructor(
    private vref:ViewContainerRef,
    private tref:TemplateRef<any>
  ) { 

  }

  ngOnChanges(){
if (!this.appCustStrDir){
  this.vref.createEmbeddedView(this.tref);
}else
this.vref.clear();
  }

}
