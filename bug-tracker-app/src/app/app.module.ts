import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UtilsModule } from '../utils/utils.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from '../bugTracker/bugTracker.component';

import { BugStatsComponent } from '../bugTracker/views/bugStats.component';
import { BugEditComponent } from '../bugTracker/views/bugEdit.component';

import { ClosedCountPipe } from '../bugTracker/pipes/closedCount.pipe';

import { BugOperationsService } from '../bugTracker/services/bugOperations.service';
import { BugApiService } from '../bugTracker/services/bugApi.service';

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , BugStatsComponent
    , BugEditComponent
    , ClosedCountPipe
  ],
  imports: [
    BrowserModule
    , UtilsModule
    , HttpClientModule
  ],
  providers: [
    BugOperationsService
    , BugApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
