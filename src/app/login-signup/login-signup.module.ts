import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {MatToolbarModule}  from '@angular/material/toolbar';
import{MatCardModule}   from '@angular/material/card';
import{MatButtonModule}   from '@angular/material/button';
import{MatDialogModule}    from  '@angular/material/dialog';
import {FormsModule}   from '@angular/forms';
@NgModule({
  declarations: [LoginComponent, CreateAccountComponent],
  imports: [
    CommonModule,
    LoginSignupRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ]
})
export class LoginSignupModule { }
