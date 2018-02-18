import { Component } from '@angular/core';
import charactersData from './data/characters';
import booksData from './data/books';
import { Observable } from 'rxjs/Observable';
import { Character } from './model/character';
import { Book } from './model/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Game Of Thrones';
  characters: Character[];
  charactersAsync: Character[];
  books: Book[];
  state1: { characters: Character[], selected: Character };
  state2: { characters: Character[], selected: Character };
  state3: { characters: Character[], selected: Character };
  inProgress = false;

  constructor() {
    charactersData.splice(0, 1900);
    this.characters = charactersData.map(props => new Character(props));
    this.books = booksData.map(props => new Book(props));
  }

  load(): void {
    this.inProgress = true;
    setTimeout(() => {
      this.charactersAsync = charactersData.map(props => new Character(props));
      this.inProgress = false;
    }, 2000);
  }

  loadState1(): void {
    this.inProgress = true;
    setTimeout(() => {
      this.state1 = {
        characters: charactersData.map(props => new Character(props)),
        selected: undefined
      };
      this.inProgress = false;
    }, 2000);
  }

  loadState2(): void {
    this.inProgress = true;
    setTimeout(() => {
      this.state2 = {
        characters: charactersData.map(props => new Character(props)),
        selected: undefined
      };
      this.inProgress = false;
    }, 2000);
  }

  loadState3(): void {
    this.inProgress = true;
    setTimeout(() => {
      this.state3 = {
        characters: charactersData.map(props => new Character(props)),
        selected: undefined
      };
      this.inProgress = false;
    }, 2000);
  }

  select3(character): void {
    this.state3.selected = character;
  }
}
