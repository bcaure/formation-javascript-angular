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

  constructor() {
    charactersData.splice(0, 1900);
    this.state1 = { characters: charactersData.map(props => new Character(props)) };
  }

  /** No more load buttons, load states on tab change */
  exampleChange(event: MatTabChangeEvent): void {
    switch (event.tab.textLabel) {
      case this.title1:
        this.inProgress = false;
        break;
      case this.title2:
        this.inProgress = false;
        break;
      case this.title3:
        this.inProgress = true;
        this.state3 = { characters: undefined, selected: undefined };
        this.loadState(this.state3);
        break;
      case this.title4:
        this.inProgress = true;
        this.state4 = { characters: undefined, selected: undefined };
        this.loadState(this.state4);
        break;
      case this.title5:
        this.inProgress = true;
        this.state5 = { characters: undefined, selected: undefined };
        this.loadState(this.state5);
        break;
        case this.title6:
        this.inProgress = true;
        this.state6 = { characters: [], books: [], houses: [], selected: undefined };
        this.loadCharactersBooksAndHouses(this.state6);
        break;
      case this.title7:
        this.inProgress = true;
        this.state7 = { characters: [], books: [], houses: [], selected: undefined };
        this.loadCharacters(this.state7);
        break;
    }
  }

  /** Example 1 */
  // tslint:disable-next-line:member-ordering
  title1 = '1) ngFor ngClass';
  // tslint:disable-next-line:member-ordering
  state1: { characters: Character[] };


  /** Example 2 */
  // tslint:disable-next-line:member-ordering
  title2 = '2) Composant Grid';
  // tslint:disable-next-line:member-ordering
  state2: { characters: Character[] };
  // tslint:disable-next-line:member-ordering
  inProgress = false;
  load(): void {
    this.inProgress = true;
    setTimeout(() => {
      this.state2 = { characters: charactersData.map(props => new Character(props)) };
      this.inProgress = false;
    }, 2000);
  }


  /** Example 3 */
  // tslint:disable-next-line:member-ordering
  title3 = '3) Character';
  // tslint:disable-next-line:member-ordering
  state3: { characters: Character[], selected: Character };
  loadState(state): void {
    this.inProgress = true;
    setTimeout(() => {
      state.characters = charactersData.map(props => new Character(props));
      state.selected = state.characters[0];
      this.inProgress = false;
    }, 2000);
  }

  /** Example 4 */
  // tslint:disable-next-line:member-ordering
  title4 = '4) ngModel';
  // tslint:disable-next-line:member-ordering
  state4: { characters: Character[], selected: Character };



  /** Example 5 */
  // tslint:disable-next-line:member-ordering
  readonly title5 = '5) @Output';
  // tslint:disable-next-line:member-ordering
  state5: { characters: Character[], selected: Character };
  select5(character) {
    this.state5.selected = character;
  }


  /** Example 6 */
  // tslint:disable-next-line:member-ordering
  readonly title6 = '6) Transclusion';
  // tslint:disable-next-line:member-ordering
  state6: { characters: Character[], books: Book[], houses: House[], selected: Character };
  select6(character) {
    this.state6.selected = character;
  }
  loadCharactersBooksAndHouses(state) {
    this.inProgress = true;
    setTimeout(() => {
      state.characters = charactersData.map(props => new Character(props));
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


  /** Example 7 */
  // tslint:disable-next-line:member-ordering
  readonly title7 = '7) Lifecycle';
  // tslint:disable-next-line:member-ordering
  state7: { characters: Character[], books: Book[], houses: House[], selected: Character };
  loadCharacters(state) {
    state.characters = charactersData.map(props => new Character(props));
  }
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
  select7(character) {
    this.state7.selected = character;
  }
  tabChange(event) {
    if (event.tab.textLabel === 'Characters') {
      this.state7.books = [];
      this.state7.houses = [];
      this.loadCharacters(this.state7);
    } else if (event.tab.textLabel === 'Houses') {
      this.state7.books = [];
      this.state7.characters = [];
      this.loadHouses(this.state7);
    } else {
      this.loadBooks(this.state7);
      this.state7.houses = [];
      this.state7.characters = [];
    }
  }
}
