function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

let amount = 0;

const numberOfBoxes = () => {
  amount = input.value;
  };

buttonCreate.addEventListener('click', numberOfBoxes);

const removeBoxes = () => {
  amount = 0;
};

buttonDestroy.addEventListener('click', removeBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divBox = document.createElement("div");
    const boxWidth = (10 + [i] * 10);
    const boxHeight = (10 + [i] * 10);
    divBox.style.width = `${boxWidth}px`;
    divBox.style.height = `${boxHeight}px`;
    divBox.style.backgroundColor = `${getRandomHexColor()}`;
    boxes.append(divBox);
}
};

createBoxes(amount);




