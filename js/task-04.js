const value = document.querySelector('#value');
let counterValue = Number(value.textContent);

const decrementBtn = document.querySelector('[data-action="decrement"]');

const decrementClick  = () => {
    counterValue -= 1;
    value.textContent = counterValue.toString();
};
decrementBtn.addEventListener('click', decrementClick);

const incrementBtn = document.querySelector('[data-action="increment"]');

const incrementClick = () => {
    counterValue += 1;
    value.textContent = counterValue.toString();
};
incrementBtn.addEventListener('click', incrementClick);
