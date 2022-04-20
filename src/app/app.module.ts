import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { TimerComponent } from './timer/timer.component';
import { UserListComponent } from './cmps/user-list/user-list.component';
import { UserPreviewComponent } from './cmps/user-preview/user-preview.component';
import { UserDetailsComponent } from './cmps/user-details/user-details.component';
import { FavoritListComponent } from './cmps/favorit-list/favorit-list.component';
import { FavoritPreviewComponent } from './cmps/favorit-preview/favorit-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TimerComponent,
    UserListComponent,
    UserPreviewComponent,
    UserDetailsComponent,
    FavoritListComponent,
    FavoritPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
