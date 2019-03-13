import { Component, OnInit } from '@angular/core';
import { SheltersService } from '../services/shelters.service';
import { Shelter } from '../models/shelter.model';

@Component({
  selector: 'app-shelters',
  templateUrl: './shelters.component.html',
  styleUrls: ['./shelters.component.css']
})
export class SheltersComponent implements OnInit {
  shelters: Array<Shelter>;


  constructor(private sheltersService: SheltersService) { }

  ngOnInit() {
    this.sheltersService.getShelters()
    .subscribe(data => {
      this.shelters = data;
    });
  }

}
