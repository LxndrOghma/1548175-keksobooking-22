import './popup.js';
import './user-form.js';
import './map.js';
import { renderPins, mapOnSubmit } from './map.js';
import { setClearForm, setUserFormSubmit, setUserFormClear} from './user-form.js';
import { showNetworkAlert, alertMessage, successMessageTemplate} from './utils/alerts.js';
import {getData} from './api.js';
import { filterAds } from './filter.js';

const setDefaultState = () => {
  setClearForm();
  mapOnSubmit();
  alertMessage(successMessageTemplate);
}

getData(
  (data) => {
    const pins = renderPins(data);
    filterAds(pins, data);
  },
  () => showNetworkAlert('Не удалось получить данные с сервера, попробуйте позже.'),
);

setUserFormSubmit(setDefaultState);
setUserFormClear(setDefaultState);
