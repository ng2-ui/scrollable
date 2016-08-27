import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";

import { AppComponent }   from './app.component';
import { Ng2ScrollableModule }  from 'ng2-scrollable';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2ScrollableModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }