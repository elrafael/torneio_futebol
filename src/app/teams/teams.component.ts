import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public team$: Observable<Team>;

  constructor(private readonly _activatedRoute: ActivatedRoute, private readonly _teamsService: TeamsService) {}

  ngOnInit(): void {
    const teamId = +this._activatedRoute.snapshot.paramMap.get('id')!;

    this.team$ = this._teamsService.getById(teamId);

  }

}
