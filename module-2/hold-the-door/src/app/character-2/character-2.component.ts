import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-character-2',
  templateUrl: './character-2.component.html',
  styleUrls: ['./character-2.component.scss']
})
export class Character2Component {

  @Input() character: Character;
  @Output() modify = new EventEmitter<Character>();

  constructor() { }

  changeName(event) {
    this.character = new Character(this.character);
    this.character.name = event.target.value;
    this.modify.emit(this.character);
  }

  changeGender(event) {
    this.character = new Character(this.character);
    this.character.isFemale = event;
    this.modify.emit(this.character);
  }
}
