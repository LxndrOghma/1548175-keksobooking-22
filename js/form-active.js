const adForm = document.querySelector('.ad-form');
const adFormFields = adForm.querySelectorAll('fieldset');
const addressField = adForm.querySelector('#address');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersFormFields = mapFiltersForm.children;


const getActivatedForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFields.forEach((field) => {
    field.removeAttribute('disabled', '');
  });
  addressField.setAttribute('readonly', '');
  mapFiltersForm.classList.remove('map__filters--disabled');
  for (let i = 0; i < mapFiltersFormFields.length; i++) {
    mapFiltersFormFields[i].removeAttribute('disabled', '');
  }
};

export {getActivatedForm};

