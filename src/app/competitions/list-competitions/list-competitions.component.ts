import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Competition } from 'src/app/interfaces/competition';
import { CompetitionsService } from 'src/app/services/competitions.service';
import { CustomDataSource } from 'src/app/shared/custom.datasource';
import { DetailCompetitionComponent } from '../detail-competition/detail-competition.component';

@Component({
  selector: 'app-list-competitions',
  templateUrl: './list-competitions.component.html',
  styleUrls: ['./list-competitions.component.scss']
})
export class ListCompetitionsComponent implements OnInit, AfterViewInit {

  public competitions$: Observable<Competition[]>;

  public dataSource: any = CustomDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns: string[] = [
    'id', 'name', 'area', 'endDate', 'round', 'winner', 'standings'
  ];

  constructor(private readonly _competitionsService: CompetitionsService, public dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this._refreshData();
    this.competitions$ = this._competitionsService.getAll();
  }

  private _refreshData() {
    this.dataSource = new CustomDataSource(this._competitionsService.getAll());
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public detail(id: number) {
    const dialogRef = this.dialog.open(DetailCompetitionComponent, {
      data: this._competitionsService.getById(id)
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this._refreshData();
    });
  }

}
