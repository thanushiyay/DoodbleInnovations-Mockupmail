import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule}   from '@angular/material/icon';
import { ContainerComponent } from './container/container.component';
import { SideTabsComponent } from './container/side-tabs/side-tabs.component';
import { MainTabsComponent } from './container/main-tabs/main-tabs.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import{MatDialogModule}  from '@angular/material/dialog';
import { ComposeMailComponent } from './container/compose-mail/compose-mail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './container/message/message.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule}   from '@angular/material/select';
import { ReplyMailComponent } from './container/reply-mail/reply-mail.component';
// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
@NgModule({
  declarations: [HeaderComponent, ContainerComponent, SideTabsComponent, MainTabsComponent, ComposeMailComponent, UserProfileComponent, MessageComponent, ReplyMailComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
    // NgxMatSelectSearchModule
  ]
})
export class HomePageModule { }
