import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../model/character';
import { NgForm } from '@angular/forms';
import { House } from '../model/house';

@Component({
    selector: 'app-character-add',
    templateUrl: './add-character-component.html',
    styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent {

    @Input() houses: House[];
    @Output() outputCharacter = new EventEmitter<Character>();

    characterToAdd: Character;

    constructor() {
        console.log('constructor add component');
        this.characterToAdd = new Character(null);
    }

    /** Function to add a character */
    addCharacter(characterForm: NgForm) {
        console.log('add a character');
        console.log(this.characterToAdd);
        console.log(characterForm.valid);
        console.log(characterForm.value);
        this.outputCharacter.emit(this.characterToAdd);
    }
}
