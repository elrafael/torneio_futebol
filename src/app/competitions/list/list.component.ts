import { Component, Input, OnInit } from '@angular/core';
import { Competitions } from '../../interfaces/competitions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() competitions: Competitions[];

  constructor() { }

  ngOnInit(): void {

  }

}
