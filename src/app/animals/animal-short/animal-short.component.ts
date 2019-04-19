import { Component, OnInit, Input } from '@angular/core';
import { Animal } from 'src/app/models/animal.model';
import { RacesService } from 'src/app/services/races.service';
import { Race } from 'src/app/models/race.model';

@Component({
  selector: 'app-animal-short',
  templateUrl: './animal-short.component.html',
  styleUrls: ['./animal-short.component.css']
})
export class AnimalShortComponent implements OnInit {
  @Input() animal: Animal;
  photo: string;

  race: Race;

  constructor(private raceService: RacesService) { }

  ngOnInit() {
    this.raceService.getRace(this.animal.raceId)
    .subscribe(data => {
      this.race = data;
    });
    this.photo = this.animal.imageUrl;
    if (this.photo === null) {
      this.photo = 'https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    }
  }
}
