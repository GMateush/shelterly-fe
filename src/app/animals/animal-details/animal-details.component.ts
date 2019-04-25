import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalsService } from 'src/app/services/animals.service';
import { Animal } from 'src/app/models/animal.model';
import { SheltersService } from 'src/app/services/shelters.service';
import { Shelter } from 'src/app/models/shelter.model';
import { RacesService } from 'src/app/services/races.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  animalId: number;
  shelter = new Shelter();
  animal = new Animal();
  raceName: string;
  age: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private animalsService: AnimalsService,
              private sheltersService: SheltersService,
              private racesService: RacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe( data => {
      this.animalId = +data.get('id');
      this.getAnimal(this.animalId);
    });
  }

  private getAnimal(id: number) {
    this.animalsService.getAnimal(id).subscribe(data => {
      this.animal = data;
      this.getShelter(this.animal.shelterId);
      this.getRace(this.animal.raceId);
    });
  }

  private getShelter(id: number) {
    this.sheltersService.getShelter(id).subscribe(data => {
      this.shelter = data;
    });
  }

  private getRace(id: number) {
    this.racesService.getRace(id).subscribe(data => {
      this.raceName = data.raceName;
    });
  }

  private editAnimal(id: number) {
    this.router.navigate(['/animals/edit', id]);
  }

  private goBack(id: number) {
    this.router.navigate(['shelters', id]);
  }
}
