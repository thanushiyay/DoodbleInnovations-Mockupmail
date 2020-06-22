import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule}   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{ReactiveFormsModule}  from '@angular/forms';
// import {MatSelectSearchComponent}  from 'ngx-mat-select-search'
// import {saveAs}  from 'file-saver';
// import { ComposeMailComponent } from './container/compose-mail/compose-mail.component';
@NgModule({
  declarations: [
    AppComponent
    // ComposeMailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    // MatSelectSearchComponent
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
