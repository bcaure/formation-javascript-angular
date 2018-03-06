import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth-guard-service';
import { CharactersComponent } from './characters/characters.component';
import { InfosComponent } from './infos/infos.component';
import { CharacterComponent } from './character/character.component';

export const ROUTES: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'books', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'infos', component: InfosComponent },
  { path: 'character/:character', component: CharacterComponent }
];