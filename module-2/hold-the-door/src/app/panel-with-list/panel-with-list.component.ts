import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-panel-with-list',
  templateUrl: './panel-with-list.component.html',
  styleUrls: ['./panel-with-list.component.scss']
})
export class PanelWithListComponent {

  @Input() object: { name: string, characters: Character[] };

  @Output() select = new EventEmitter<Character>();

  constructor() { }

  onSelect(it: Character) {
    this.select.emit(it);
  }
}
