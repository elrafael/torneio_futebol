import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private url: string;
  private urlMatches: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}competitions/`;
    this.urlMatches = `${environment.apiUrl}`;
  }

  public getMatches(competition: string, filter: string = 'SCHEDULED') {
    return this.http.get(`${this.url}${competition}/matches`).pipe(map( (data: any) => {

      return data.matches.filter(match => match.status == filter);
    }));
  }

  public getDetails(id: number) {
    return this.http.get(`${this.urlMatches}/matches/${id}`);
  }
}
