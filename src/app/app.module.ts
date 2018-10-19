import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import 'hammerjs';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule, MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
