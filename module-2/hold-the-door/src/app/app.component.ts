import { Component } from '@angular/core';
import { data } from './data';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game Of Thrones';
  characters: any;
  charactersAsync: any;
  inProgress = false;

  constructor() {
    this.characters = data;
  }

  load() {
    this.inProgress = true;
    setTimeout(() =>  {
      this.charactersAsync = data;
      this.inProgress = false;
    }, 2000);
  }
}
