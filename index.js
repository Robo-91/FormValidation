const username = document.getElementById('username');
const password = document.getElementById('userpassword');
const confirmPassword = document.getElementById('confirm-password');
const email = document.getElementById('user-email');
const country = document.getElementById('user-country');
const zipCode = document.getElementById('zip-code');
const submit = document.getElementById('submit');

const validateUsername = () => {
	if (username.validity.valueMissing) {
		username.setCustomValidity('Please enter a Username!');
	} else {
		username.setCustomValidity('');
	}
}

const validateConfirmPassword = () => {
	if (confirmPassword.value !== password.value) {
		confirmPassword.setCustomValidity('Please type the same password!');
	} else {
		confirmPassword.setCustomValidity('');
	}
}

const validateCountry = () => {
	if (country.validity.valueMissing) {
		country.setCustomValidity('Please enter your country!');
	} else {
		country.setCustomValidity('');
	}
}

const validateZipCode = () => {
	if (zipCode.validity.patternMismatch) {
		zipCode.setCustomValidity('Zip code must follow ##### format!');
	} else {
		zipCode.setCustomValidity('');
	}
}

submit.addEventListener('click', () => {
	validateUsername();
	validateConfirmPassword();
	validateCountry();
	validateZipCode();
});
