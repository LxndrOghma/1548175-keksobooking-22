import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {getActivatedFilters, getActivatedForm} from './user-form.js';
import {getAdvertisement} from './popup.js';
import {PINS_MIN_COUNT} from './data.js';
import {getFilteredAds} from './filter.js'

const addressField = document.querySelector('#address');
const DEFAULT_LAT = 35.6729;
const DEFAULT_LNG = 139.7564;

const map = L.map('map-canvas')
  .on('load', getActivatedForm)
  .setView({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
})

const mainMarker = L.marker(
  {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
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

const getAdressCoordinates = () => {
  addressField.value = fixedCoordinates();
};

getAdressCoordinates();

mainMarker.on('moveend', () => {
  addressField.value = fixedCoordinates();
});

const clearPins = (pins) => {
  pins.forEach((pin) => {
    pin.remove();
  })
};

let pins = [];

const renderPins = (data) => {

  clearPins(pins);

  data
    .slice()
    .filter(getFilteredAds)
    .slice(0, PINS_MIN_COUNT)
    .forEach((ad) => {
      const {lat, lng} = ad.location;

      const icon = L.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [40,40],
        iconAnchor: [20,40],
      })

      const marker = L.marker(
        {
          lat: lat,
          lng: lng,
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
      pins.push(marker);
    });
  getActivatedFilters();
};

const setDefaultCoordinates = () => {
  mainMarker.setLatLng({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  });
  map.setView({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  }, 10);
}

const mapOnSubmit = () => {
  setDefaultCoordinates();
  getAdressCoordinates();
}

const getFilteredPins = (data) => () => renderPins(data);

export {renderPins, mapOnSubmit, getFilteredPins};
