import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { RacesService } from 'src/app/services/races.service';
import { Race } from 'src/app/models/race.model';
import { SheltersService } from 'src/app/services/shelters.service';
import { Shelter } from 'src/app/models/shelter.model';
import { Animal } from 'src/app/models/animal.model';
import { AnimalsService } from 'src/app/services/animals.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.component.html',
  styleUrls: ['./animal-edit.component.css']
})
export class AnimalEditComponent implements OnInit {
  selectedPhoto = null;
  animal: Animal = new Animal();
  animalId: number;

  animalForm = this.fb.group({
    name: [''],
    description: [''],
    race: [''],
    dateOfBirth: [''],
    shelter: [''],
    imageUrl: ['']
  });


  races: Array<Race>;
  shelters: Array<Shelter>;

  constructor(private racesService: RacesService,
              private sheltersService: SheltersService,
              private fb: FormBuilder,
              private animalsService: AnimalsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( data => {
      this.animalId = +data.get('id');
      this.getAnimal(this.animalId);
    });

    this.racesService.getRaces().subscribe(data => {
      this.races = data;
    });

    this.sheltersService.getShelters().subscribe(data => {
      this.shelters = data;
    });

  }

  private getAnimal(id: number) {
    if (id !== 0) {
      this.animalsService.getAnimal(id).subscribe(data => {
        this.animal = data;
        this.setForm();
      });
    }

  }

  onSubmit() {
    this.mapAnimal(this.animal);

    if (this.animal.id === undefined) {
      console.log(this.animal);
      this.animalsService.addAnimal(this.animal).subscribe(data => {
        this.router.navigateByUrl(`/shelters/${this.animal.shelterId}`);
      });
    } else {
      this.animalsService.updateAnimal(this.animal).subscribe(data => {
        this.router.navigateByUrl(`/shelters/${this.animal.shelterId}`);
      });
    }

    ;
  }

  private setForm() {
    this.animalForm.patchValue({
      name: this.animal.name,
      description: this.animal.description,
      dateOfBirth: this.animal.dateOfBirth,
      race: this.animal.raceId,
      shelter: this.animal.shelterId,
      imageUrl: this.animal.imageUrl
    });
  }

  private mapAnimal(animal: Animal) {
      animal.name = this.animalForm.value.name;
      animal.description = this.animalForm.value.description;
      animal.dateOfBirth = this.animalForm.value.dateOfBirth;
      animal.raceId = this.animalForm.value.race;
      animal.shelterId = this.animalForm.value.shelter;
      animal.imageUrl = this.animalForm.value.imageUrl;
  }

  onDelete() {
    this.animalsService.deleteAnimal(this.animalId).subscribe(data => {
      this.router.navigateByUrl(`/shelters/${this.animal.shelterId}`);
    });
  }

  // onFileSelected(event) {
  //   this.selectedPhoto = event.target.files[0];
  //   console.log(this.selectedPhoto);
  // }

}
