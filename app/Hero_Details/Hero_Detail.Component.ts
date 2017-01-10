import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common' ;
import 'rxjs/add/operator/switchMap';

import { Hero } from '../models/Hero' ;
import { HeroService} from '../services/Hero.service'


@Component({
  moduleId : module.id,
  selector: 'my-hero-detail',
  templateUrl :'./Hero_Details.component.html'
})
export class HeroDetailComponent implements OnInit {

    @Input()
    hero : Hero ;

    constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location
) {}



//*********get the her with this id ***************//
ngOnInit() : void {
  this.route.params  
     .switchMap((params:Params) =>this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero=hero);

}

//************method to go bak****************//

goBack() : void {
  this.location.back();
}


Save() : void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
}


}