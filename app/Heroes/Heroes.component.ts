import { Component } from '@angular/core';
import { Hero } from '../models/Hero' ;
import { HeroService} from '../services/Hero.service'
import { OnInit} from '@angular/core' ;
import { Router,Params} from '@angular/router';

@Component({
  moduleId : module.id,
  selector: 'my-heroes',
  templateUrl: './Heroes.component.html',
})





export class HeroesComponent implements OnInit { 


constructor(private heroservice : HeroService, private router :Router){}

heroes : Hero[] ;
selectedHero : Hero


onSelect(hero : Hero): void{
  this.selectedHero = hero;
  console.log('selected hero is', hero);
}


getHeroes() : void {
 this.heroservice.getHeroes().then(heroes=>this.heroes=heroes);
}


ngOnInit() : void{
  //*****we call the method ******//
  this.getHeroes();
}



gotoDetail() : void {
this.router.navigate(['/detail', this.selectedHero.id]);
}

add(name : string) : void {
name = name.trim();
if(!name) { return ;}

  this.heroservice.add(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
}

//*************************//

delete(hero: Hero): void {
  this.heroservice
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}



 }
