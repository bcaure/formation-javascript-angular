import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-panel-with-list',
  templateUrl: './panel-with-list.component.html',
  styleUrls: ['./panel-with-list.component.scss']
})
export class PanelWithListComponent {

  @Input() object: { name: string };

  constructor() { }
}
