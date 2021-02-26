const adForm = document.querySelector('.ad-form');
const adFormFields = adForm.querySelectorAll('fieldset');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersFormFields = mapFiltersForm.querySelectorAll('.map__filter, .map__features');
const currentPrice = adForm.querySelector('#price')
const houseTypeList = adForm.querySelector('#type');
const checkInTime = adForm.querySelector('#timein');
const checkOutTime = adForm.querySelector('#timeout');
const addressField = adForm.querySelector('#address');
const roomsNumber = adForm.querySelector('#room_number');
const guestsNumber = adForm.querySelector('#capacity');
const adTitle = adForm.querySelector('#title');
const AD_TITLE_MIN_LENGTH = 30;
const AD_TITLE_MAX_LENGTH = 100;

const minPrice = {
  palace: 10000,
  bungalow: 0,
  house: 5000,
  flat: 1000,
}

const roomValues = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
}

const getMinPriceValue = () => {
  currentPrice.placeholder = minPrice[houseTypeList.value];
  currentPrice.min = minPrice[houseTypeList.value];
}

// Form inactive

adForm.classList.add('ad-form--disabled');
adFormFields.forEach((field) => {
  field.setAttribute('disabled', '');
});

mapFiltersForm.classList.add('map__filters--disabled');
mapFiltersFormFields.forEach((field) => {
  field.setAttribute('disabled', '');
});

// Form activation function

const getActivatedForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFields.forEach((field) => {
    field.removeAttribute('disabled', '');
  });
  addressField.setAttribute('readonly', '');
  mapFiltersForm.classList.remove('map__filters--disabled');
  mapFiltersFormFields.forEach((field) => {
    field.setAttribute('disabled', '');
  });
}

// Check in and check out fields link

const onCheckInTimeChange = () => {
  checkOutTime.value = checkInTime.value;
}

const onCheckOutTimeChange = () => {
  checkInTime.value = checkOutTime.value;
}

// House type and price fields link

const onHouseTypeChange = () => {
  getMinPriceValue()
}

// Form restrictions

getMinPriceValue();

houseTypeList.addEventListener('change', onHouseTypeChange);

checkInTime.value = checkOutTime.value;
checkInTime.addEventListener('change', onCheckInTimeChange);
checkOutTime.addEventListener('change', onCheckOutTimeChange);

// Form validation

const onTitleInput = () => {
  const titleLength = adTitle.value.length;

  if (titleLength < AD_TITLE_MIN_LENGTH) {
    adTitle.classList.add('ad-form__error');
    adTitle.setCustomValidity('Ещё ' + (AD_TITLE_MIN_LENGTH - titleLength) + ' симв.');
  } else if (titleLength > AD_TITLE_MAX_LENGTH) {
    adTitle.classList.add('ad-form__error');
    adTitle.setCustomValidity('Удалите лишние' + (titleLength - AD_TITLE_MAX_LENGTH) + 'симв.');
  } else {
    adTitle.classList.remove('ad-form__error');
    adTitle.setCustomValidity('');
  }

  adTitle.reportValidity();
}

const onCurrentPriceInput = () => {
  if (Number(currentPrice.value) < Number(currentPrice.min)) {
    currentPrice.setCustomValidity('Минимальная цена за ночь - ' + currentPrice.min + ' руб.');
    currentPrice.classList.add('ad-form__error');
  } else {
    currentPrice.setCustomValidity('');
    currentPrice.classList.remove('ad-form__error');
  }

  currentPrice.reportValidity();
}

const onRoomsNumberChange = () => {
  const guestsNumberOptions = guestsNumber.querySelectorAll('option');

  guestsNumberOptions.forEach((option) => {
    option.disabled = true;
  });

  roomValues[roomsNumber.value].forEach((roomAmmount) => {
    guestsNumberOptions.forEach((option) => {
      if (Number(option.value) === roomAmmount) {
        option.disabled = false;
        option.selected = true;
      }
    })
  })
}

adTitle.addEventListener('input', onTitleInput);
currentPrice.addEventListener('input', onCurrentPriceInput);
roomsNumber.addEventListener('change', onRoomsNumberChange);

export {getActivatedForm};
