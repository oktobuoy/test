const helloButton = document.querySelector('#hello-button');
const greeting = document.querySelector('#greeting');

helloButton.addEventListener('click', () => {
  greeting.textContent = "Hello! Thanks for stopping by. This is my first website!";
});
document.querySelector('#year').textContent = new Date().getFullYear();
