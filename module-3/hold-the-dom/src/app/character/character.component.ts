import { Component, Input } from '@angular/core';
import { Character } from '../model/character';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() character: Character[];

  constructor(private route: ActivatedRoute) { 
    //console.log(this.route.snapshot.paramMap.get('character'));
  }
}
