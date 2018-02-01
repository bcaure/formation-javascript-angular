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

  constructor() {
    this.characters = data;
    setTimeout(() =>  this.charactersAsync = data , 2000);
  }
}
