import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SheltersComponent } from './shelters/shelters.component';
import { ShelterShortComponent } from './shelters/shelter-short/shelter-short.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ShelterDetailsComponent } from './shelters/shelter-details/shelter-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SheltersComponent,
    ShelterShortComponent,
    NavbarComponent,
    ShelterDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
