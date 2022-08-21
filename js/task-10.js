function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
// const button = document.querySelector('#controls > button');

const buttonCreate = document.querySelector('[data-create]');
// const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

let amount = 2

const numberOfBoxes = () => {
  return input.value;
  };

// amount = numberOfBoxes();

// button.addEventListener('click', amount);



buttonCreate.addEventListener('click', numberOfBoxes);

// amount = numberOfBoxes();

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divBox = document.createElement("div");
    divBox.style.width = "10px";
    divBox.style.heigth = "10px";
    divBox.style.backgroundColor = `${getRandomHexColor()}`;
    boxes.append(divBox);
}
};

createBoxes(numberOfBoxes());


