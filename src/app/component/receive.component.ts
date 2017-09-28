import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent implements OnInit {
@Input()
rcv:string;

  constructor() { }

  ngOnInit() {
  }

}
