import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Competition, CompetitionsService } from 'src/app/services/competitions.service';
import { CustomDataSource } from 'src/app/shared/custom.datasource';

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
    'id', 'name', 'area', 'endDate'
  ];

  constructor(private readonly _competitionsService: CompetitionsService) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this._refreshData();
    this.competitions$ = this._competitionsService.getAll();
    this.competitions$.subscribe(
      console.log,
      console.error,
      () => { console.log('terminou') }
    )
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

}
