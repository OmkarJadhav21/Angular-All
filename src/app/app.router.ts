import{Routes ,RouterModule} from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { DirectivesComponent } from './directives/directives.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ServicesComponent } from './services/services.component';
import { LogedinComponent } from './services/logedin/logedin.component';
import { LoginService } from './login.service';
import { PipeComponent } from './pipe/pipe.component';

const myRoute:Routes=[
    {path:'Compo',component: ComponentComponent},
    {path:'Direc',component: DirectivesComponent},
    {path:'content',component: ContentProjectionComponent},
    {path:'Service',component: ServicesComponent},
    {path:'Pipes',component: PipeComponent},
    {path:'logedin',component: LogedinComponent,canActivate:[LoginService]},
];
export const MyRoutingModule = RouterModule.forRoot(myRoute);