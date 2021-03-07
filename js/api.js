const getData = (onSucces, onFail) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((resolve) => resolve.json())
    .then(onSucces)
    .catch(() => {
      onFail('Не удалось получить данные с сервера, попробуйте позже.')
    });
};

const sendData = (onSuccess, errorMessage, body) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        errorMessage();
      }
    })
    .catch(() => {
      throw new Error('Не удалось отправить данные!');
    });
};

export {getData, sendData};
