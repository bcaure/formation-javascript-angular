import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-characters-grid-2',
  templateUrl: './characters-grid-2.component.html',
  styleUrls: ['./characters-grid-2.component.scss']
})
export class CharactersGrid2Component {

  @Input() characters: Character[];
  @Output() select = new EventEmitter<Character>();

  constructor() { }

  onSelect(it: Character) {
    this.select.emit(it);
  }
}
