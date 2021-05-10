import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}competitions/`;
  }

  getMatches(competition: string) {
    return this.http.get(`${this.url}${competition}/matches`);
  }
}
