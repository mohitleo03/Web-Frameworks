import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RButtonComponent } from './r-button/r-button.component';
import { RListService } from './r-list.service';
import { RListComponent } from './r-list/r-list.component';

@NgModule({
  declarations: [AppComponent, RButtonComponent, RListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [RListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
