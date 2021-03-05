import './popup.js';
import './user-form.js';
import './map.js';
import { renderCard, mapOnSubmit } from './map.js';
import { setClearForm, setUserFormSubmit, setUserFormClear} from './user-form.js';
import { showNetworkAlert} from './utils/alerts.js';
import {getData} from './api.js';

const setDefaultState = () => {
  setClearForm();
  mapOnSubmit();
}

getData(
  (data) => renderCard(data),
  () => showNetworkAlert('Не удалось получить данные с сервера, попробуйте позже.'),
);

setUserFormSubmit(setDefaultState);
setUserFormClear(setDefaultState);
