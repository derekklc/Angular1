import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mockheros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;
  // onSelection = (heroId: number) => {
  //   this.selectedHero = this.heroes.find((person) => person.id === heroId);
  // };
  onSelection(heroId: number): void {
    this.selectedHero = this.heroes.find((person) => person.id === heroId);
  }
}
