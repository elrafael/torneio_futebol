import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private readonly httpClient: HttpClient) {}

  getById(id: number): Observable<Team> {
    return this.httpClient.get<Team>(`teams/${id}`);

  }
}
