import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Competitions } from '../interfaces/competitions';
import { CompetitionsService } from '../services/competitions.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public leagues: Competitions[];
  public errorMessage: string = '';

  constructor(private competitionsService: CompetitionsService) { }

  ngOnInit(): void {
    this.getCompetitions();
  }

  private getCompetitions() {
    const joined = forkJoin([
      this.competitionsService.getByCompetition('PPL'),

      this.competitionsService.getByCompetition('BSA')
    ]);

    joined.subscribe( (data: Competitions[]) => {
      this.leagues = data;
    }, (error) => {
      this.errorMessage = error.error.message;
    })
  }

}
