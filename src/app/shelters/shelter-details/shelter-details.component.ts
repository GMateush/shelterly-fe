import { Component, OnInit } from '@angular/core';
import { SheltersService } from 'src/app/services/shelters.service';
import { Shelter } from 'src/app/models/shelter.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalsService } from 'src/app/services/animals.service';
import { Animal } from 'src/app/models/animal.model';

@Component({
  selector: 'app-shelter-details',
  templateUrl: './shelter-details.component.html',
  styleUrls: ['./shelter-details.component.css']
})
export class ShelterDetailsComponent implements OnInit {
  shelter: Shelter = null;
  shelterId: number;
  animals: Array<Animal>;
  availableSpace: number;

  constructor(private route: ActivatedRoute,
              private sheltersService: SheltersService,
              private animalsService: AnimalsService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.shelterId = params['id'];
    });
    this.sheltersService.getShelter(this.shelterId)
    .subscribe(data => {
      this.shelter = data;
    });

    this.animalsService.getAnimalsFromShelter(this.shelterId)
    .subscribe(data => {
      this.animals = data;
      this.availableSpace = this.shelter.capacity - data.length;
    });
  }

  editAnimal(id: number) {
    this.router.navigate(['/animals/edit', id]);
  }

  onAddNew() {
    this.router.navigate(['/animals/edit/0']);
  }

  editShelter(id: number) {
    this.router.navigate(['shelters/edit', id]);
  }

}
