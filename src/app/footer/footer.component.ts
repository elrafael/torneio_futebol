import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public version: Versions;

  constructor() {}

  ngOnInit(): void {
    this.version = {
      angular: environment.Angular_version,
      material: environment.Material_version,
      typescript: environment.Typescript_version
    }
  }

}

interface Versions {
  angular: string;
  material: string;
  typescript: string;
}
