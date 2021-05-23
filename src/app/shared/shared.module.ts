import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { ListComponent } from "../competitions/list/list.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // BrowserModule
  ],
  exports: [
    ListComponent
  ],
  declarations: [
    ListComponent
  ],
})
export class SharedModule {}
