import _ from 'lodash';
import {renderPins, mapOnSubmit, getFilteredPins} from './map.js';
import {setClearForm, setUserFormSubmit, setUserFormClear} from './user-form.js';
import {showNetworkAlert, alertMessage, successMessageTemplate} from './utils/alerts.js';
import {getData} from './api.js';
import {setFilterChange, setFilterReset } from './filter.js';
import {RENDER_DELAY} from './data.js';
import {setImagesPreview} from './images.js';


const setDefaultState = () => {
  setClearForm();
  mapOnSubmit();
  alertMessage(successMessageTemplate);
}

getData(
  (data) => {
    renderPins(data);
    setFilterReset(() => renderPins(data));
    setFilterChange(_.debounce(getFilteredPins(data), RENDER_DELAY));
  },
  () => showNetworkAlert('Не удалось получить данные с сервера, попробуйте позже.'),
);

setUserFormSubmit(setDefaultState);
setUserFormClear(setDefaultState);

setImagesPreview();
