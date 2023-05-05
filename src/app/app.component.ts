import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'some-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.custom.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
