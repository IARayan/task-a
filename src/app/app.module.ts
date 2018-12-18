import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { ScoreComponent } from './score/score.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';
import { WrapperComponent } from './wrapper/wrapper.component';

import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ScoreComponent,
    ResetButtonComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
