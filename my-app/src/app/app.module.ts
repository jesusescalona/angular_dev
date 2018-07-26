import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Images } from './utils/images';
import { Titles } from './utils/titles';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    Images,
    Titles
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
