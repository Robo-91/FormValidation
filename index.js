const username = document.getElementById('username');
const password = document.getElementById('userpassword');
const confirmPassword = document.getElementById('confirm-password');
const email = document.getElementById('user-email');
const country = document.getElementById('user-country');
const zipCode = document.getElementById('zip-code');
const submit = document.getElementById('submit');

const validateUsername = () => {
	if (username.validity.valueMissing) {
		username.setCustomValidity('Please Enter a Username!');
	}
};
	

submit.addEventListener('click', () => {
	validateUsername();
});

