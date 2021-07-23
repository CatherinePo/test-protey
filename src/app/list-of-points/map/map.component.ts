import { Component, Output, Input, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { map } from 'leaflet';
import points from '../../points.json';
export * from './map.component';
import * as Le from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  public map: any;
  // @Input() map;
  a = 1;
  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    tiles.addTo(this.map);

    var geoList: GeoJSON.FeatureCollection<any> = {
      type: 'FeatureCollection',
      features: [],
    };

    var customIcon = L.Icon.extend({
      options: {
        shadowUrl: 'http://leafletjs.com/docs/images/leaf-shadow.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76],
      },
    });

    var greenIcon = new L.Icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    for (let i = 0; i < points.stationBeanList.length; i++) {
      geoList.features.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            points.stationBeanList[i].longitude,
            points.stationBeanList[i].latitude,
          ],
        },
        properties: {
          id: points.stationBeanList[i].id,
          stationName: points.stationBeanList[i].stationName,
          totalDocks: points.stationBeanList[i].totalDocks,
          station: points.stationBeanList[i].stationName,
          stAddress1: points.stationBeanList[i].stAddress1,
          stAddress2: points.stationBeanList[i].stAddress2,
          city: points.stationBeanList[i].city,
          postalCode: points.stationBeanList[i].postalCode,
          testStation: points.stationBeanList[i].testStation,
        },
      });
      // marker.addEventListener(
      //   'click',
      //   this.map.setView(new L.LatLng(points.stationBeanList[i].longitude, points.stationBeanList[i].latitude), 12)
      // );
      var marker1 = L.marker([
        points.stationBeanList[i].latitude,
        points.stationBeanList[i].longitude,
      ])
        .bindPopup(`${points.stationBeanList[i].stationName}`)
        .openPopup()
        .on('click', () => {
          this.map.setView(
            new L.LatLng(
              points.stationBeanList[i].latitude,
              points.stationBeanList[i].longitude
            ),
            12
          );
          L.marker(
            [
              points.stationBeanList[i].latitude,
              points.stationBeanList[i].longitude,
            ],
            { icon: greenIcon }
          ).addTo(this.map);
        })
        .addTo(this.map);
    }
    this.map.setView(
      new L.LatLng(
        points.stationBeanList[0].latitude,
        points.stationBeanList[0].longitude
      ),
      12
    );
    this.map.on('click', (e: any) => {
      var marker = new L.Marker(e.latlng, { draggable: true });

      marker.addTo(this.map);
      marker
        .bindPopup('<b>Hello world!</b><br />I am a popup.')
        .openPopup()
        .on('click', () => {
          this.map.setView(new L.LatLng(e.latlng.lat, e.latlng.lng), 12);
          L.marker([e.latlng.lat, e.latlng.lng], { icon: greenIcon }).addTo(
            this.map
          );
          // marker.Icon({icon: greenIcon});
        })
        .addTo(this.map);
      // var testM = L.marker([51.5, -0.09], {icon: greenIcon})
      // testM.addTo(this.map);
    });
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
    var map = this.map;
  }
}
