import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../interfaces/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}teams/`;
  }

  public getById(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.url}${id}`);
  }
}
