import { Component, OnInit, Input } from '@angular/core';
import { Shelter } from 'src/app/models/shelter.model';

@Component({
  selector: 'app-shelter-short',
  templateUrl: './shelter-short.component.html',
  styleUrls: ['./shelter-short.component.css']
})
export class ShelterShortComponent implements OnInit {
  @Input() shelter: Shelter;

  constructor() { }

  ngOnInit() {
  }

}
