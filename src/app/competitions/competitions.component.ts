import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Competitions } from '../interfaces/competitions';
import { CompetitionsService } from '../services/competitions.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  public leagues: Competitions[];
  public errorMessage: string = '';

  constructor(private competitionsService: CompetitionsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    const joined = forkJoin([
      this.competitionsService.getByCompetition('CL'),
      this.competitionsService.getByCompetition('PPL'),
      this.competitionsService.getByCompetition('PL'),
      this.competitionsService.getByCompetition('BSA')
    ]);

    joined.subscribe( (data: Competitions[]) => {
      this.leagues = data;
    }, (error) => {
      this.errorMessage = error.error.message;
    })
  }

}
