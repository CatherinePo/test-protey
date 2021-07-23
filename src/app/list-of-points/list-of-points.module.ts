import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../list-of-points/map/map.component';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapComponent],
})
export class ListOfPointsModule {}
