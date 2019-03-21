import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  public API = 'http://localhost:50278/api';
  public ANIMALS_API = `${this.API}/animals`;

  constructor(private http: HttpClient) { }

  getAnimalsFromShelter(id: number): Observable<Array<Animal>> {
    return this.http.get<Array<Animal>>(`${this.ANIMALS_API}/shelter${id}`);
  }
}
