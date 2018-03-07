import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import charactersData from '../data/characters';
import { Character } from '../model/character';
import { House } from '../model/house';
import { CharacterService } from '../services/character.service';
import { SortByAlphAndSex } from '../pipes/sort-by-alph-and-sex';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  selected: any;
  characters: Character[];

  charactersObs: Observable<Character>;

  @Input() houses : House[];
  @Output() selectEvent = new EventEmitter<Character>();

  constructor(public characterService : CharacterService, public sortByAlphAndSex: SortByAlphAndSex) { }

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    //this.characters = charactersData.map(props => new Character(props));
    
    /** use my service, and change the data binding from the api */
    /*this.characterService.pullCharacters()
    .subscribe((characters: Array<Character>) => {
      this.characters = this.sortByAlphAndSex.transform(characters);
    });*/

    /** Use directly observable */
    this.charactersObs = this.characterService.pullCharacters();
    console.log(this.charactersObs);
  }

  select(character) {
    this.selected = character;
    this.selectEvent.emit(this.selected);
  }

  addCharacter(character) {
    let char = new Character(null);
    char.name = character.name;
    char.isFemale = character.isFemale;
    this.characters.push(char);
  }
}
