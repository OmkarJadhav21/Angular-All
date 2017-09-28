import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
@Output()
  em:EventEmitter<string>
  constructor() {
    this.em=new EventEmitter<string>()
   }

  ngOnInit() {
  }
  onclick(){
  this.em.emit('visi');

  }
}
