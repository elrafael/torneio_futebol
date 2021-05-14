import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from '../services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  public matches: any;
  public errorMessage: string = '';

  constructor(private matchesService: MatchesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const match = this.activatedRoute.snapshot.paramMap.get('competition');
    // const filter = 'FINISHED';
    const filter = 'SCHEDULED';
    const matches = this.matchesService.getMatches(match, filter);
    matches.subscribe( (data) => {
      this.matches = data;
    }, error => this.errorMessage = error.error.message )
  }

}
