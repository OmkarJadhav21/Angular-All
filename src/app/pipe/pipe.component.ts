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
private sys="Macintosh"
private Mobiles=['Nokia','Samsung','HTC','iPhone','Dell','Hp','Lenovo','Sony'];


  constructor() { }

  ngOnInit() {
    this.date=new Date().toString()
  }
  AddNewMob(newmobile){
    this.Mobiles.push(newmobile)
  }

}
