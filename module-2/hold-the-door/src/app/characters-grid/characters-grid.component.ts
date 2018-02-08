import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-characters-grid',
  templateUrl: './characters-grid.component.html',
  styleUrls: ['./characters-grid.component.scss']
})
export class CharactersGridComponent implements OnInit {

  @Input() state: any;

  constructor() { }

  ngOnInit() {
  }

  select(it) {
    this.state.selected = it;
  }

}
