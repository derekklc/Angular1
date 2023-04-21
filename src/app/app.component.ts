import { Component } from '@angular/core';

@Component({
  selector: 'some-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.custom.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  abcde = '12345';
}
