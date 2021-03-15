const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0) {
    throw new Error('Ошибка! Минимальное значение меньше 0!')
  }

  if (min > max) {
    throw new Error('Ошибка! Минимальное значение не меньше максимального! Проверьте введённые параметры!')
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min, max, accuracy) => {

  if (min < 0) {
    throw new Error('Ошибка! Минимальное значение меньше 0!')
  }

  if (min >= max) {
    throw new Error('Ошибка! Минимальное значение не меньше максимального! Проверьте введённые параметры!')
  }

  let number = Math.random() * (max - min) + min;

  return Number(number.toFixed(accuracy));
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length -1)];
};

const getShuffledArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i +1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getUniqueRandomArray = (array) => {
  const length = getRandomNumber(1, array.length);
  return getShuffledArray(array).slice(0 , length)
};

export {getRandomNumber, getRandomFloat, getRandomArrayElement, getShuffledArray, getUniqueRandomArray};
