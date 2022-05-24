import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'  ;

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReportsComponent } from './components/reports/reports.component';
import { OverallMetricsComponent } from './components/overall-metrics/overall-metrics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReportsComponent,
    OverallMetricsComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
