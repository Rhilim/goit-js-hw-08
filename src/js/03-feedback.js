import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formInput = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const formData = {};

outputToFormData();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (formInput.value === '' || textarea.value === '') {
    return alert('Please fill in all required fields.');
  }

  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}

function outputToFormData() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  const parsedMsg = JSON.parse(savedMessage);
  console.log(parsedMsg);

  if (savedMessage) {
    formInput.value = parsedMsg.email || '';
    textarea.value = parsedMsg.message || '';
  }
}

// В завданні 3 також потрібно перевіряти всі значення, які ви читаєте з localStorage і записуєте
//  в поля форми. Якщо там пусто, вам у поля запишеться undefined. При сабміті форми не забувайте
//  чистити обʼєкт в якому зберігаєте значення з полів форми, щоб інформація не тягнулась в наступні
//  сабміти. Форма має відправлятись при заповнених 2-х полях форми
