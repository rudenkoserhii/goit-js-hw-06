const input = document.querySelector('#validation-input');


const checkValidation = () => {
    input.classList.remove("invalid");
    input.classList.remove("valid");
    
    if (input.value.length < input.dataset.length) {
        input.classList.add("invalid");
    }
    else {
        input.classList.add("valid");
    }
};

input.addEventListener('blur', checkValidation);