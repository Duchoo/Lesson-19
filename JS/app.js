const form = document.querySelector('#user-login-form');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const personalInput = document.querySelector('input[name="personal_number"]');
const mobileInput = document.querySelector('input[name="mobile_number"]');
const positionInput = document.querySelector('input[name="position"]');


form.addEventListener('submit', e => {
  e.preventDefault();
  try {
    console.log(emailInput.value);
  } catch (e) {
    console.log('catch error', e);
  }
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isPersonalnumberValid = validatePersonalnumber();
  const isMobilenumberValid = validateMobilenumber();
  const isPositionValid = validatePosition();
  if(isEmailValid && isPasswordValid && isPersonalnumberValid && isMobilenumberValid && isPositionValid  ){
    console.log('Call to backend api');
