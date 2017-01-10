import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http' ;
import './rxjs';

import { InMemoryWebApiModule} from 'angular-in-memory-web-api'
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchService } from './services/Hero_search.service';
import { HeroesComponent }  from './Heroes/Heroes.component';
import { HeroDetailComponent } from './Hero_Details/Hero_Detail.Component'
import { AppComponent} from './app.component'
import { DashboardComponent} from './dashboard.component'
import { HeroSearchComponent } from './HeroSearch/HeroSearch.component'

//**************import the mdoule of routing ***************//



import { AppRoutingModule} from './app.module_routing' ;

import { HeroService} from './services/Hero.service'

@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [ HeroesComponent, HeroDetailComponent, AppComponent,DashboardComponent, HeroSearchComponent ],
  providers  :[HeroService,HeroSearchService],
  bootstrap:    [ AppComponent ]
})
export class AppModule {





 }
