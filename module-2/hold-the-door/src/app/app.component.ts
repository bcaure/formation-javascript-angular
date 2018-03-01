import { Component } from '@angular/core';
import charactersData from './data/characters';
import booksData from './data/books';
import housesData from './data/houses';
import { Observable } from 'rxjs/Observable';
import { Character } from './model/character';
import { Book } from './model/book';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { House } from './model/house';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /** Example 1 & 2 */
  characters: Character[];
  constructor() {
    charactersData.splice(0, 1900);
    this.characters = charactersData.map(props => new Character(props));
  }

  /** Example 3 */
  charactersAsync: Character[];
  inProgress = false;
  load(): void {
    this.inProgress = true;
    setTimeout(() => {
      this.charactersAsync = charactersData.map(props => new Character(props));
      this.inProgress = false;
    }, 2000);
  }

  /** No more load buttons, load states on tab change */
  exampleChange(event: MatTabChangeEvent): void {
    switch (event.tab.textLabel) {
      case this.title4:
        this.inProgress = true;
        this.state1 = { characters: undefined, selected: undefined };
        this.loadCharacters(this.state1);
        break;
      case this.title5:
        this.inProgress = true;
        this.state2 = { characters: undefined, selected: undefined };
        this.loadCharacters(this.state2);
        break;
      case this.title6:
        this.inProgress = true;
        this.state3 = { books: undefined, houses: undefined, selected: undefined };
        this.loadBooksAndHouses(this.state3);
        break;
      case this.title7:
        this.inProgress = true;
        this.state4 = { books: [], houses: [], selected: undefined };
        this.loadBooks(this.state4);
        break;
    }
  }

  /** Example 4 */
  // tslint:disable-next-line:member-ordering
  title4 = '4) Component';
  // tslint:disable-next-line:member-ordering
  state1: { characters: Character[], selected: Character };
  loadCharacters(state): void {
    this.inProgress = true;
    setTimeout(() => {
      state.characters = charactersData.map(props => new Character(props)),
        this.inProgress = false;
    }, 2000);
  }

  /** Example 5 */
  // tslint:disable-next-line:member-ordering
  title5 = '5) Databinding';
  // tslint:disable-next-line:member-ordering
  state2: { characters: Character[], selected: Character };

  /** Example 6 */
  // tslint:disable-next-line:member-ordering
  readonly title6 = '6) @Output';
  // tslint:disable-next-line:member-ordering
  state3: { books: Book[], houses: House[], selected: Character };
  loadBooksAndHouses(state) {
    this.inProgress = true;
    setTimeout(() => {
      state.books = booksData.map(props => {
        const b = new Book(props);
        b.characters = charactersData.filter(character => character.books.includes(b.id));
        return b;
      });
      state.houses = housesData.map(props => {
        const h = new House(props);
        h.characters = charactersData.filter(character => character.house === h.id);
        return h;
      });
      this.inProgress = false;
    }, 1000);
  }
  select3(character) {
    this.state3.selected = character;
  }

  /** Example 7 */
  // tslint:disable-next-line:member-ordering
  readonly title7 = '7) Lifecycle';
  // tslint:disable-next-line:member-ordering
  state4: { books: Book[], houses: House[], selected: Character };
  loadBooks(state) {
    state.books = booksData.map(props => {
      const b = new Book(props);
      b.characters = charactersData.filter(character => character.books.includes(b.id));
      return b;
    });
  }
  loadHouses(state) {
    state.houses = housesData.map(props => {
      const h = new House(props);
      h.characters = charactersData.filter(character => character.house === h.id);
      return h;
    });
  }
  select4(character) {
    this.state4.selected = character;
  }
  tabChange(event) {
    if (event.tab.textLabel === 'Houses') {
      this.state4.books = [];
      this.loadHouses(this.state4);
    } else {
      this.loadBooks(this.state4);
      this.state4.houses = [];
    }
  }
}
