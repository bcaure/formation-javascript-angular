import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-characters-grid-4',
  templateUrl: './characters-grid-4.component.html',
  styleUrls: ['./characters-grid-4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersGrid4Component implements OnInit {
  @Input() characters: Character[];
  @Output() select = new EventEmitter<Character>();

  constructor() { }

  ngOnInit(): void {

  }

  onSelect(it: Character) {
    this.select.emit(it);
  }
}
