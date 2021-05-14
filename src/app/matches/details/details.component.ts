import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public details: any;
  public errorMessage: string = '';

  constructor(private matchesService: MatchesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getDetails(id);
  }

  private getDetails(id: number) {
    this.matchesService.getDetails(id).subscribe( (data) => {
      this.details = data;
      console.log(this.details);
    }, error => this.errorMessage = error.error.message );
  }

}
