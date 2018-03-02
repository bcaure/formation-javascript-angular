import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../model/character';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter';

/**
 * Manage all action about characters
 */
@Injectable()
export class CharacterService {

    /** Constructor of the service */
    constructor(private http: HttpClient) {
    }

    /** Function to get all characters from the api */
    pullCharacters() {
        let options: any;
        let url = 'https://anapioficeandfire.com/api/characters/';
        return this.http.get(url);
    }
}


