import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyRoutingModule } from './app.router';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ComponentComponent } from './component/component.component';
import { SendComponent } from './component/send.component';
import { ReceiveComponent } from './component/receive.component';
import { FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { MyDirDirective } from './directives/my-dir.directive';
import { CustStrDirDirective } from './directives/cust-str-dir.directive';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { WrongWayComponent } from './content-projection/wrong-way/wrong-way.component';
import { ServicesComponent } from './services/services.component';
import{ DataserviceService } from './dataservice.service';
import { LogedinComponent } from './services/logedin/logedin.component'
import { HttpModule} from '@angular/http'
import { LoginService } from './login.service';
import { PipeComponent } from './pipe/pipe.component';
import { AsciiPipePipe } from './pipe/ascii-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    ComponentComponent,
    SendComponent,
    ReceiveComponent,
    DirectivesComponent,
    MyDirDirective,
    CustStrDirDirective,
    ContentProjectionComponent,
    WrongWayComponent,
    ServicesComponent,
    LogedinComponent,
    PipeComponent,
    AsciiPipePipe
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    FormsModule,
    RouterModule,
    HttpModule
  ],
  providers: [DataserviceService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
