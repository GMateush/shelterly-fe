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

  race: Race;

  constructor(private raceService: RacesService) { }

  ngOnInit() {
    this.raceService.getRace(this.animal.raceId)
    .subscribe(data => {
      this.race = data;
    });
  }

  
}
