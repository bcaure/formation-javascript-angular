import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-characters-grid',
  templateUrl: './characters-grid.component.html',
  styleUrls: ['./characters-grid.component.scss']
})
export class CharactersGridComponent implements OnInit, OnDestroy {
  @Input() characters: Character[];
  @Output() select = new EventEmitter<Character>();

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  onSelect(it: Character) {
    this.select.emit(it);
  }
}
