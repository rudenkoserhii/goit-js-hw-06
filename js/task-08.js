const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value.length === 0 || password.value.length === 0) {
        console.warn('Всі поля повинні бути заповнені!');
    }
    else {
        const answear = {email: `${email.value}`, password: `${password.value}`}
        console.log(answear);
        form.reset();
    }
});
