import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SheltersComponent } from './shelters/shelters.component';
import { ShelterDetailsComponent } from './shelters/shelter-details/shelter-details.component';
import { AnimalEditComponent } from './animals/animal-edit/animal-edit.component';
import { ShelterEditComponent } from './shelters/shelter-edit/shelter-edit.component';
import { AnimalDetailsComponent } from './animals/animal-details/animal-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeaderComponent },
  { path: 'shelters', component: SheltersComponent },
  { path: 'shelters/:id', component: ShelterDetailsComponent },
  { path: 'animals/edit/:id', component: AnimalEditComponent },
  { path: 'animals/:id', component: AnimalDetailsComponent},
  { path: 'shelters/edit/:id', component: ShelterEditComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
