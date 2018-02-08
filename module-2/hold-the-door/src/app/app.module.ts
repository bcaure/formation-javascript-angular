import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { CharactersGridComponent } from './characters-grid/characters-grid.component';
import { CharacterComponent } from './character/character.component';



@NgModule({
  declarations: [
    AppComponent,
    CharactersGridComponent,
    CharacterComponent
  ],
  imports: [
    MatTabsModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
