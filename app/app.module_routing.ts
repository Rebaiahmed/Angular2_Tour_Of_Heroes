import { NgModule} from '@angular/core' ;

import { RouterModule,Routes} from '@angular/router';

import { HeroesComponent }  from './Heroes/Heroes.component';
import { HeroDetailComponent } from './Hero_Details/Hero_Detail.Component'
import { AppComponent} from './app.component'
import { DashboardComponent} from './dashboard.component'



//**************Define our routes ******************//

const routes : Routes = [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
]


@NgModule({
imports : [RouterModule.forRoot(routes)],
exports : [RouterModule]
})


export class AppRoutingModule {

}