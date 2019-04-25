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
import { AnimalShortComponent } from './animals/animal-short/animal-short.component';
import { AnimalEditComponent } from './animals/animal-edit/animal-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShelterEditComponent } from './shelters/shelter-edit/shelter-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SheltersComponent,
    ShelterShortComponent,
    NavbarComponent,
    ShelterDetailsComponent,
    AnimalShortComponent,
    AnimalEditComponent,
    ShelterEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
