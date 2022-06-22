import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResearchModule } from './research/research.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
