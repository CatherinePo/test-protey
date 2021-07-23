import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from '../app/list-of-points/map/map.component';
import { ListOfPointsComponent } from './list-of-points/list-of-points.component';
// import { ModalDialogComponent } from './modalDialogComponent/modalDialog.component';
// import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [AppComponent, ListOfPointsComponent, MapComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
