import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  matches: any;

  constructor(private matchesService: MatchesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const match = this.activatedRoute.snapshot.paramMap.get('competition');
    const matches = this.matchesService.getMatches(match);
    matches.subscribe( (data) => {
      console.log(data);
      this.matches = data;
    })

  }

}
