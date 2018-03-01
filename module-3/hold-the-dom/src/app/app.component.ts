import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {

  characters: Character[]
  books: Book[];
  houses: House[];
  selected: Character;
  inProgress: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.inProgress = true;
    this.loadCharacters();
  }

  loadCharacters() {
    this.characters = charactersData.map(props => new Character(props));
  }

  loadBooks() {
    this.books = booksData.map(props => {
      const b = new Book(props);
      b.characters = charactersData.filter(character => character.books.includes(b.id));
      return b;
    });
  }

  loadHouses() {
    this.houses = housesData.map(props => {
      const h = new House(props);
      h.characters = charactersData.filter(character => character.house === h.id);
      return h;
    });
  }

  select(character) {
    this.selected = character;
  }

  tabChange(event) {
    if (event.tab.textLabel === 'Characters') {
      this.books = [];
      this.houses = [];
      this.loadCharacters();
    } else if (event.tab.textLabel === 'Houses') {
      this.books = [];
      this.characters = [];
      this.loadHouses();
    } else {
      this.loadBooks();
      this.houses = [];
      this.characters = [];
    }
  }
}
