import { Component, OnInit } from '@angular/core';
import { Competitions } from '../interfaces/competitions';
import { CompetitionsService } from '../services/competitions.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

  public leagues: Competitions;

  constructor(private competitionsService: CompetitionsService) { }

  ngOnInit(): void {
    let c = this.competitionsService.getAll();
    c.subscribe( (data: Competitions) => {
      this.leagues = data.competitions;
      // console.log(data.competitions);
      // console.log(data.)
    });

    let premierLeague = this.competitionsService.getById(2021);
    premierLeague.subscribe( (data) => {
      console.log(data.name);

    })

  }

}
