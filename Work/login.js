const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const button = document.querySelector('.Login');
const initial = document.querySelector('.initial');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

button.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    initial.style.display = "none";
});
