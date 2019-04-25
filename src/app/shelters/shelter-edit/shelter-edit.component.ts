import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SheltersService } from 'src/app/services/shelters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Shelter } from 'src/app/models/shelter.model';

@Component({
  selector: 'app-shelter-edit',
  templateUrl: './shelter-edit.component.html',
  styleUrls: ['./shelter-edit.component.css']
})
export class ShelterEditComponent implements OnInit {

  shelterId: number;
  shelter = new Shelter();

  shelterForm = this.fb.group({
    shelterName: [''],
    description: [''],
    address: [''],
    imageUrl: [''],
    capacity: ['']
  });

  constructor(private fb: FormBuilder,
              private sheltersService: SheltersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( data => {
      this.shelterId = +data.get('id');
      this.getShelter(this.shelterId);
    });
  }

  private getShelter(id: number) {
    if (id !== 0) {
      this.sheltersService.getShelter(id).subscribe( data => {
        this.shelter = data;
        this.setForm();
      });
    }
  }

  private onSubmit() {
    this.mapShelter(this.shelter);

    if (this.shelter.id === undefined) {
      this.sheltersService.addShelter(this.shelter).subscribe(data => {
        this.router.navigateByUrl('/shelters');
      });
    } else {
      this.sheltersService.updateShelter(this.shelter).subscribe( data => {
        this.router.navigateByUrl('/shelters');
      });
    }
  }

  private setForm() {
    this.shelterForm.patchValue({
      shelterName: this.shelter.shelterName,
      description: this.shelter.description,
      address: this.shelter.address,
      capacity: this.shelter.capacity,
      imageUrl: this.shelter.imageUrl
    });
  }

  private mapShelter(shelter: Shelter) {
    shelter.shelterName = this.shelterForm.value.shelterName;
    shelter.description = this.shelterForm.value.description;
    shelter.address = this.shelterForm.value.address;
    shelter.capacity = this.shelterForm.value.capacity;
    shelter.imageUrl = this.shelterForm.value.imageUrl;
  }

}
