function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorName = document.querySelector('.color');
const btn = document.querySelector('.change-color');
const body = document.querySelector('body');

const changeColor = () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorName.textContent = `${getRandomHexColor()}`;
};

btn.addEventListener('click', changeColor);