import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {}
  heroes: Hero[] = [];
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  selectedHero?: Hero;
  // onSelection = (heroId: number) => {
  //   this.selectedHero = this.heroes.find((person) => person.id === heroId);
  // };
  onSelection(heroId: number): void {
    this.selectedHero = this.heroes.find((person) => person.id === heroId);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
