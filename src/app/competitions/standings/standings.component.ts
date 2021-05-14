import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  public standing;
  public errorMessage: string;

  constructor(private competitionsService: CompetitionsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const competitionId: number = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getStanding(competitionId);
  }

  private getStanding(competitionId: number) {
    this.competitionsService.getStandings(competitionId).subscribe( (data) => {
      this.standing = data;
      console.log(this.standing);

    }, error => this.errorMessage = error.error.message);
  }

}
