import { Component } from '@angular/core';
import charactersData from './data/characters';
import booksData from './data/books';
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
  books: any;
  state: any;
  inProgress = false;

  constructor() {
    charactersData.splice(0, 1900);
    this.characters = charactersData;
    this.books = booksData;
  }

  load() {
    this.inProgress = true;
    setTimeout(() =>  {
      this.charactersAsync = charactersData;
      this.inProgress = false;
    }, 2000);
  }

  loadState() {
    this.inProgress = true;
    setTimeout(() =>  {
      this.state = {
        characters: charactersData,
        selected: undefined
      };
      this.inProgress = false;
    }, 2000);
  }

  radioChange(event) {
    console.log(event);
  }
}
