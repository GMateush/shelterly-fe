import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Race } from '../models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  public API = 'http://localhost:50278/api';

  constructor(private http: HttpClient) { }

  getRace(id: number): Observable<Race> {
    return this.http.get<Race>(`${this.API}/races/${id}`);
  }
}
