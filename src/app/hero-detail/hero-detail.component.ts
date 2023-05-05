import { Hero } from '../hero';
import { Component } from '@angular/core';
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
  // @Input() hero?: Hero;
  hero?: Hero;
  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const urlId = Number(this.route.snapshot.paramMap.get('id'));
    if (typeof urlId === 'number') {
      this.heroService.getHeroes().subscribe((heroesList) => {
        this.hero = heroesList.find((item) => item.id === urlId);
      });
    }
  }
  goBack(): void {
    this.location.back();
  }
}
