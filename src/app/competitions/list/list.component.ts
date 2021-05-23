import { Component, Input, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Competitions } from '../../interfaces/competitions';
import { CompetitionsService } from '../../services/competitions.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public leagues: Competitions[];

  @Input() competitions: Competitions[];

  constructor() { }

  ngOnInit(): void {
    this.leagues = this.competitions;
  }

}
