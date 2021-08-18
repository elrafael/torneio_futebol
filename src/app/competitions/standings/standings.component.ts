import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Standing } from 'src/app/interfaces/standing';
import { Table } from 'src/app/interfaces/table';
import { CompetitionsService } from 'src/app/services/competitions.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  public standings: Table[];

  public dataSource: MatTableDataSource<any>;
  public displayedColumns: string[] = [
    'position', 'team', 'points', 'played', 'wins', 'draw', 'lost', 'goalsFor', 'goalsAgainst', 'goalsDifference'
  ];

  constructor(private readonly _competitionsService: CompetitionsService, private readonly _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const competitionId: number = +this._activatedRoute.snapshot.paramMap.get('id')!;
    this._refreshData(competitionId);
  }

  private _refreshData(competitionId: number) {
    const response: Observable<Standing[]> = this._competitionsService.getStandingsByCompetition(competitionId)
    response.subscribe((standing: Standing[]) => {
      this.standings = standing[0].table;
      this.dataSource = new MatTableDataSource(this.standings)
    })
  }

}
