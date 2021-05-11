import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Competitions } from '../interfaces/competitions';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}competitions/`;
  }

  public getAll(): Observable<Competitions> {
    return this.http.get<Competitions>(this.url).pipe(map( (data: Competitions) => {
      const leagueCode = data.code.toLowerCase();
      data.emblemUrl = `${leagueCode}.png`;
      return data;
    }));
  }

  public getByCompetition(competition: string) {
    return this.http.get<Competitions>(`${this.url}${competition}` ).pipe(map( (data: Competitions) => {
      const leagueCode = data.code.toLowerCase();
      data.emblemUrl = `${leagueCode}.png`;
      return data;
    }));
  }
}
