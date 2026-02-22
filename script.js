const helloButton = document.getElementById('helloBtn');
const message = document.getElementById('message');

helloButton.addEventListener('click', () => {
  message.textContent = 'Skvělé! Právě jsi spustil JavaScript na svém webu.';
});
