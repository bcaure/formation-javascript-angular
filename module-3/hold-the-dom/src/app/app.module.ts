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
import { CharacterComponent } from './character/character.component';
import { PanelWithListComponent } from './panel-with-list/panel-with-list.component';
import { CharactersGridComponent } from './characters-grid/characters-grid.component';

/** Import de la classe services */
import { CharacterService } from './services/character.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Import routing
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AuthGuard } from './guards/auth-guard-service';
import { AddCharacterComponent } from './addCharacter/add-character-component';
import { CharactersComponent } from './characters/characters.component';
import { SortByAlphAndSex } from './pipes/sort-by-alph-and-sex';
import { InfosComponent } from './infos/infos.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    PanelWithListComponent,
    CharactersGridComponent,
    AddCharacterComponent,
    CharactersComponent,
    SortByAlphAndSex,
    InfosComponent
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
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HttpClientModule, CharacterService, AuthGuard, SortByAlphAndSex],
  bootstrap: [AppComponent]
})
export class AppModule { }
