import {isEscEvent} from './events.js';

const ALERT_SHOW_TIME = 5000;
const page = document.querySelector('main');
const successMessageTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
const errorMessageTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const showNetworkAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '30%';
  alertContainer.style.top = '15%';
  alertContainer.style.right = '30%';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontFamily = '"Roboto", "Arial", sans-serif';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#e3e3de';
  alertContainer.style.border = '1px solid #c9c9c3';
  alertContainer.style.borderRadius = '4px';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const onClickAlert = () => {
  page.removeChild(page.lastChild);
  page.removeEventListener('click', onClickAlert);
  page.removeEventListener('keydown', onKeydownAlert);
};

const onKeydownAlert = (evt) => {
  if (isEscEvent(evt)) {
    page.removeChild(page.lastChild);
    page.removeEventListener('keydown', onKeydownAlert);
    page.removeEventListener('click', onClickAlert);
  }
}

const onErorrButtonClickAlert = () => {
  page.removeChild(page.lastChild);

  page.removeEventListener('click', onClickAlert);
  page.removeEventListener('keydown', onKeydownAlert);
}

const alertMessage = (template) => {
  const newAd = template.cloneNode(true);
  page.appendChild(newAd);

  page.addEventListener('click', onClickAlert);
  page.addEventListener('keydown', onKeydownAlert);

  if (newAd.contains(newAd.querySelector('button'))) {
    const errorButton = newAd.querySelector('button')
    errorButton.addEventListener('click', onErorrButtonClickAlert);
  }
}

export {showNetworkAlert, alertMessage, successMessageTemplate, errorMessageTemplate};
