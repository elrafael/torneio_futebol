import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Competition } from 'src/app/interfaces/competition';

@Component({
  selector: 'app-detail-competition',
  templateUrl: './detail-competition.component.html',
  styleUrls: ['./detail-competition.component.scss']
})
export class DetailCompetitionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetailCompetitionComponent>, @Inject(MAT_DIALOG_DATA) public competition$: Observable<Competition>) {}

  ngOnInit(): void {
    // this.competition$.subscribe(
    //   () => {},
    //   (error) => {
    //     console.log(error)
    //     this.dialogRef.close();
    //     return error;
    //   })
  }

}
