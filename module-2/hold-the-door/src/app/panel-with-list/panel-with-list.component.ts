import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-panel-with-list',
  templateUrl: './panel-with-list.component.html',
  styleUrls: ['./panel-with-list.component.scss']
})
export class PanelWithListComponent implements OnInit {

  @Input() object: { name: string, characters: Character[] };

  constructor() { }

  ngOnInit() {
  }

}
