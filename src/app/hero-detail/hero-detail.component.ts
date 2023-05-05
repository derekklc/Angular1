import { Hero } from '../hero';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  @Input() hero?: Hero;
  ngOnInit(): void {
    const urlId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('hero detail loaded', urlId);
    if (typeof urlId === 'number') {
      this.heroService.getHeroes().subscribe((heroesList) => {
        this.hero = heroesList.find((item) => item.id === urlId);
      });
    }
  }
}
