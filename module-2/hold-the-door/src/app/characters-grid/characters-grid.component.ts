import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-characters-grid',
  templateUrl: './characters-grid.component.html',
  styleUrls: ['./characters-grid.component.scss']
})
export class CharactersGridComponent implements OnInit {

  @Input() state: {characters: Character[], selected: Character};

  constructor() { }

  ngOnInit() {
  }

  select(it: Character): void {
    this.state.selected = it;
  }

}
