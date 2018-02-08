import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatTabsModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
