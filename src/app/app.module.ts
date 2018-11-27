import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CollectionUtilsModule } from 'ng-collection-utils';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CollectionUtilsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
