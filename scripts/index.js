const popup = document.querySelector('.popup');
const openPopupBtn = document.querySelector('#open_popup_btn');
const closePopupBtn = document.querySelector('.popup__close-button');
const popupOverlay = document.querySelector('.popup__overlay');

const popupTitle = document.querySelector('.popup__title');
const popupText = document.querySelector('.popup__text');

function openPopup (title, text) {
  popupTitle.textContent = title;
  popupText.textContent = text;
  popup.classList.add('popup_visible');
}

function closePopup () {
  popup.classList.remove('popup_visible');
}

openPopupBtn.addEventListener('click', function(Event) {
  openPopup(popupTitle.textContent, popupText.textContent);
});

closePopupBtn.addEventListener('click', function() {
  closePopup();
});

popupOverlay.addEventListener('click', function() {
  closePopup();
});


const targetImages = document.querySelectorAll('.card__image');

function handleImageClick(event) {
  const parent = event.target.parentElement;
  const title = parent.querySelector('.card__title');
  const description = parent.querySelector('.card__description');
  openPopup(title.textContent, description.textContent);
}

for (let i = 0; i < targetImages.length; i++) {
  const currentImage = targetImages[i];
  currentImage.addEventListener('click', handleImageClick);
}