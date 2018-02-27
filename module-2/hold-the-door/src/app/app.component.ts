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
  title = 'Game Of Thrones';

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

  /** Example 4 */
  // tslint:disable-next-line:member-ordering
  state1: { characters: Character[], selected: Character };
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

  /** Example 5 */
  // tslint:disable-next-line:member-ordering
  state2: { characters: Character[], selected: Character };
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

  /** Example 6 */
  // tslint:disable-next-line:member-ordering
  readonly title6 = '6) @Output';
  // tslint:disable-next-line:member-ordering
  state3: { books: Book[], houses: House[], selected: Character };
  tabChange(event: MatTabChangeEvent): void {
    if (event.tab.textLabel === this.title6) {
      this.inProgress = true;
      setTimeout(() => {
        this.state3 = {
          books: booksData.map(props => {
            const b = new Book(props);
            b.characters = charactersData.filter(character => character.books.includes(b.id));
            return b;
          }),
          houses: housesData.map(props => {
            const h = new House(props);
            h.characters = charactersData.filter(character => character.house === h.id);
            return h;
          }),
          selected: undefined
        };
        this.inProgress = false;
      }, 1000);
    }
  }

  select3(character) {
    this.state3.selected = character;
  }
}
