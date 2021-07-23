import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapComponent } from '../list-of-points/map/map.component';
// import { nemap } from '../list-of-points/map/map.component';
import * as map from '../list-of-points/map/map.component';
import points from '../points.json';

@Component({
  selector: 'app-list-of-points',
  templateUrl: './list-of-points.component.html',
  styleUrls: ['./list-of-points.component.css'],
  providers: [MapComponent],
})
export class ListOfPointsComponent implements OnInit {
  // private map = MapComponent.map;
  private initList(): void {
    // @Input() ;
    console.log(map);
    for (let i = 0; i < points.stationBeanList.length; i++) {
      let a = points.stationBeanList[i].stationName;
      let app = document.getElementById('list');

      const div = document.createElement('div');
      const p = document.createElement('p');
      const delButton = document.createElement('button');
      div.classList.add('item');
      delButton.classList.add('button');
      p.textContent = `${a}`;
      delButton.textContent = 'Удалить точку';
      app?.appendChild(div);
      div.appendChild(p);
      div.appendChild(delButton);

      delButton.addEventListener('click', function () {
        div.classList.add('delete');
      });

      div.addEventListener('click', function () {
        const list = document.querySelectorAll('.item');
        list.forEach((item) => {
          item.addEventListener('click', (e) => {
            list.forEach((el) => {
              el.classList.remove('selectedItem');
            });
            // list.forEach(el=>{ el.classList.remove('selectedButton'); });
            item.classList.add('selectedItem');
            // item.classList.add('button')
          });
        });

        const markersList = document.querySelectorAll('.leaflet-marker-icon');
        list.forEach((item) => {
          item.addEventListener('click', (e) => {
            // L.marker([points.stationBeanList[i].latitude, points.stationBeanList[i].longitude], {icon: greenIcon}).addTo(this.map);
            // list.forEach(el=>{ el.classList.remove('selectedItem'); });
            // // list.forEach(el=>{ el.classList.remove('selectedButton'); });
            // item.classList.add('selectedItem')
            // // item.classList.add('button')
          });
        });
        let a = document.getElementsByName('item');
        // a.classList.add('button');
        console.log(
          `координаты выбранного объекта: ${points.stationBeanList[i].latitude},${points.stationBeanList[i].longitude}`
        );
        let lat = points.stationBeanList[i].latitude;
        let lng = points.stationBeanList[i].longitude;
        // div.addEventListener('click', getLoc(lat, lng));
        // div.addEventListener(
        //   'click',
        //   this.map.setView(
        //     new L.LatLng(
        //       points.stationBeanList[i].longitude,
        //       points.stationBeanList[i].latitude
        //     ),
        //     12
        //   )
        // );
        // div.classList.toggle('item');
        // div.classList.toggle('selectedItem');
        // delButton.classList.toggle('button');
        // delButton.classList.toggle('selectedButton');
      });
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.initList();
  }
}
