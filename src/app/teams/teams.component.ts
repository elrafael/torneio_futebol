import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../interfaces/team';
import { TeamsService } from '../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public team: Team;
  public errorMessage: string = '';

  constructor(private teamsService: TeamsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const teamId: number = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getTeam(teamId);
  }

  private getTeam(id: number) {
    const team = this.teamsService.getById(id);

    team.subscribe( (data) => {
      this.team = data;
    }, (error) => {
      this.errorMessage = error.error.message;
    });
  }

}
