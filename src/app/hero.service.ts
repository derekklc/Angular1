import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mockheros';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);

    this.messageService.add('Heroes data fetched.');
    return heroes;
  }
}
