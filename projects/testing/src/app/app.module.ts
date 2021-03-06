import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgChartsModule } from '../../../ng-charts/src/lib/ng-charts.module';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
