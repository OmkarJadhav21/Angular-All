import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
private date:String
private money=500
private mystr="Omkar"
  constructor() { }

  ngOnInit() {
    this.date=new Date().toString()
  }

}
