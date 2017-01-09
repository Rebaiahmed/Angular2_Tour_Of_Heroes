import { Component } from '@angular/core';
import { Hero } from './models/Hero' ;
import { HeroService} from './services/Hero.service'
import { OnInit} from '@angular/core' ;


@Component({
    moduleId : module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent  {

      heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

 }