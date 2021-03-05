const getData = (onSucces, onFail) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((resolve) => resolve.json())
    .then((data) => {
      onSucces(data);
    })
    .catch(() => {
      onFail('Не удалось получить данные с сервера, попробуйте позже.')
    });
};

const sendData = (onSuccess, succesMessage, errorMessage, body) => {
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
        succesMessage();
      } else {
        errorMessage();
      }
    })
    .catch(() => {
      errorMessage();
    });
};

export {getData, sendData};
