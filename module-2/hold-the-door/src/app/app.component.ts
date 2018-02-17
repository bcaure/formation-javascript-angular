import { Component } from '@angular/core';
import charactersData from './data/characters';
import booksData from './data/books';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Game Of Thrones';
  characters: any;
  charactersAsync: any;
  books: any;
  state1: any;
  state2: any;
  state3: any;
  inProgress = false;

  constructor() {
    charactersData.splice(0, 1900);
    this.characters = charactersData;
    this.books = booksData;
  }

  load() {
    this.inProgress = true;
    setTimeout(() => {
      this.charactersAsync = charactersData;
      this.inProgress = false;
    }, 2000);
  }

  loadState1() {
    this.inProgress = true;
    setTimeout(() => {
      this.state1 = {
        characters: charactersData,
        selected: undefined
      };
      this.inProgress = false;
    }, 2000);
  }

  loadState2() {
    this.inProgress = true;
    setTimeout(() => {
      this.state2 = {
        characters: charactersData,
        selected: undefined
      };
      this.inProgress = false;
    }, 2000);
  }

  loadState3() {
    this.inProgress = true;
    setTimeout(() => {
      this.state3 = {
        characters: charactersData,
        selected: undefined
      };
      this.inProgress = false;
    }, 2000);
  }
  select3(character) {
    this.state3.selected = character;
  }
}
