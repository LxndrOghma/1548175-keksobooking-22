const adForm = document.querySelector('.ad-form');
const adFormFields = adForm.querySelectorAll('fieldset');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersFormFields = mapFiltersForm.children;


const getActivatedForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFields.forEach((field) => {
    field.removeAttribute('disabled', 'disabled');
  });
  mapFiltersForm.classList.remove('map__filters--disabled');
  for (let i = 0; i < mapFiltersFormFields.length; i++) {
    mapFiltersFormFields[i].removeAttribute('disabled', 'disabled');
  }
};

export {getActivatedForm};

