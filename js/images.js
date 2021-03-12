import {FILE_TYPES} from './data.js';

const avatarFileChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const imagesFileChooser = document.querySelector('#images');
const imagesPreview = document.querySelector('.ad-form__photo');
const IMAGE_PREVIEW_WIDTH = 70;
const IMAGE_PREVIEW_HEIGHT = 70;

const getImagePreview = () => {
  imagesFileChooser.addEventListener('change', () => {
    const img = document.createElement('img');
    imagesPreview.insertAdjacentElement('beforeend', img);
    img.width = IMAGE_PREVIEW_WIDTH;
    img.height = IMAGE_PREVIEW_HEIGHT;
    img.alt = 'Превью изображения';

    const file = imagesFileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        img.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

const getAvatarPreview = () => {
  avatarFileChooser.addEventListener('change', () => {
    const file = avatarFileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        avatarPreview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

const setImagesPreview = () => {
  getImagePreview();
  getAvatarPreview();
};

export {setImagesPreview};


