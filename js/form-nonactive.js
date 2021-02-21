const adForm = document.querySelector('.ad-form');
const adFormFields = adForm.querySelectorAll('fieldset');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersFormFields = mapFiltersForm.children;

adForm.classList.add('ad-form--disabled');
adFormFields.forEach((field) => {
  field.setAttribute('disabled', 'disabled');
});

mapFiltersForm.classList.add('map__filters--disabled');
for (let i = 0; i < mapFiltersFormFields.length; i++) {
  mapFiltersFormFields[i].setAttribute('disabled', 'disabled');
}

