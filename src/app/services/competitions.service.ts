import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Competition } from '../interfaces/competition';
import { Observable } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Standing, StandingResult } from '../interfaces/standing';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {

  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<Competition[]> {
    return this.httpClient.get<Competition[]>('competitions?plan=TIER_ONE').pipe(
      map((data: any) => {
        if (!environment.production) {
          const response = data.competitions;
          return response;
        }
        console.log(data);
        return data;
      })
    );
  }

  getById(id: number): Observable<Competition> {
    if (!environment.production) {
      return this.httpClient.get<Competition>(`competitions/${id}`);
    }
    return this.httpClient.get<Competition[]>(`competitions?id=${id}`).pipe(
      delay(1000),
      map(array => array[0])
    );
  }

  getStandingsByCompetition(id: number): Observable<StandingResult> {
    return this.httpClient.get<StandingResult>(`competitions/${id}/standings`).pipe(
      map((data: any) => {
        if (environment.production) {
          const response = data.standings;
          return response;
        }
        return data;
      })
    );
  }
}
