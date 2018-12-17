import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { ScoreComponent } from './score/score.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ScoreComponent,
    ResetButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
