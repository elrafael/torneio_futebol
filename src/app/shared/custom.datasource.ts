import { MatTableDataSource } from "@angular/material/table";
import { Observable, Subscription } from "rxjs";

export class CustomDataSource extends MatTableDataSource<any> {

  private collection$: Subscription;

  constructor(private collection: Observable<any>) {
    super();
    this.collection$ = collection.subscribe(data => {
      this.data = data;
    })
  }

  disconnect() {
    this.collection$.unsubscribe();
    super.disconnect();
  }
}
