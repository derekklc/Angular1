import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
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
    this.messageService.add(`HeroesComponent: Selected hero id=${heroId}`);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
