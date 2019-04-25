import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shelter } from '../models/shelter.model';

@Injectable({
  providedIn: 'root'
})
export class SheltersService {
  public API = 'http://localhost:50278/api';
  public SHELTERS_API = `${this.API}/shelters`;

  constructor(private http: HttpClient) { }

  getShelters(): Observable<Array<Shelter>> {
    return this.http.get<Array<Shelter>>(this.SHELTERS_API);
  }

  getShelter(id: number): Observable<Shelter> {
    return this.http.get<Shelter>(`${this.SHELTERS_API}/${id}`);
  }

  updateShelter(shelter: Shelter) {
    return this.http.put(`${this.SHELTERS_API}/${shelter.id}`, shelter);
  }

  addShelter(shelter: Shelter) {
    return this.http.post(`${this.SHELTERS_API}`, shelter);
  }

  deleteShelter(id: number) {
    return this.http.delete(`${this.SHELTERS_API}/${id}`);
  }
}
