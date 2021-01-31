const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0) {
    return alert('Ошибка! Минимальное значение меньше 0!')
  }

  if (min >= max) {
    return alert('Ошибка! Минимальное значение не меньше максимального! Проверьте введённые параметры!')
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFloat = (min, max, accuracy) => {

  if (min < 0) {
    return alert('Ошибка! Минимальное значение меньше 0!')
  }

  if (min >= max) {
    return alert('Ошибка! Минимальное значение не меньше максимального! Проверьте введённые параметры!')
  }

  let number = Math.random() * (max - min) + min;

  return Number(number.toFixed(accuracy));
}

getRandomNumber(0,100);
getRandomFloat(0, 100, 3);
