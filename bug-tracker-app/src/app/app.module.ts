import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from '../bugTracker/bugTracker.component';

import { TrimTextPipe } from '../bugTracker/pipes/trimText.pipe';

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , TrimTextPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
