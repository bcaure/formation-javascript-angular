import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-characters-grid-2',
  templateUrl: './characters-grid-2.component.html',
  styleUrls: ['./characters-grid-2.component.scss']
})
export class CharactersGrid2Component implements OnInit {

  @Input() characters: any;
  @Output() selectCharacter: EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(it) {
    this.selectCharacter.emit(it);
  }
}
