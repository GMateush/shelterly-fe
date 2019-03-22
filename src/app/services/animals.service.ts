import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Animal } from '../models/animal.model';
import { catchError, retry } from 'rxjs/operators';

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

  getAnimal(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.ANIMALS_API}/${id}`);
  }

  updateAnimal(animal: Animal) {
    return this.http.put(`${this.ANIMALS_API}/${animal.id}`, animal);
  }

  addAnimal(animal: Animal) {
    return this.http.post(`${this.ANIMALS_API}`, animal);
  }
}
