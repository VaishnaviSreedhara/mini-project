const url = 'https://www.w3schools.com/'; 
const form = document.createElement('form');
form.method = 'POST';
form.action = 'https://www.w3schools.com/submit'; 
const input = document.createElement('input');
input.type = 'hidden';
input.name = 'url';
input.value = url;
form.appendChild(input);
document.body.appendChild(form);
form.submit();

