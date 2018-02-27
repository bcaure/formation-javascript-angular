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
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { CharactersGridComponent } from './characters-grid/characters-grid.component';
import { CharacterComponent } from './character/character.component';
import { CharactersGrid2Component } from './characters-grid-2/characters-grid-2.component';
import { PanelWithListComponent } from './panel-with-list/panel-with-list.component';



@NgModule({
  declarations: [
    AppComponent,
    CharactersGridComponent,
    CharacterComponent,
    CharactersGrid2Component,
    PanelWithListComponent
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
    MatExpansionModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
