/* global L:readonly */
import {getActivatedForm} from './form-active.js';
import {ads} from './data.js';
import {getAdvertisement} from './popup.js';

const addressField = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', getActivatedForm)
  .setView({
    lat: 35.6729,
    lng: 139.7564,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

const mainMarker = L.marker(
  {
    lat: 35.6729,
    lng: 139.7564,
  },
  {
    draggable: true,
    icon:mainPinIcon,
  },
);

mainMarker.addTo(map);

const fixedCoordinates = () => {
  return Object.values(mainMarker.getLatLng()).map((value) => {
    return Number(value.toFixed(5));
  })
}

addressField.value = fixedCoordinates();

mainMarker.on('moveend', () => {
  addressField.value = fixedCoordinates();
});

ads().forEach((ad) => {
  const {x, y} = ad.location;

  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40,40],
    iconAnchor: [20,40],
  })

  const marker = L.marker(
    {
      lat: x,
      lng: y,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      getAdvertisement(ad),
      {
        keepInView: true,
      },
    );
});

