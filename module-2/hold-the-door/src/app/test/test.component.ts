import { Component, OnInit } from '@angular/core';
import charactersData from '../data/characters';
import booksData from '../data/books';
import housesData from '../data/houses';
import { Book } from '../model/book';
import { House } from '../model/house';
import { Character } from '../model/character';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  state3: { books: Book[], houses: House[], selected: Character };
  constructor() { }

  ngOnInit() {
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
  }
  select3(character) {
    this.state3.selected = character;
  }
}
