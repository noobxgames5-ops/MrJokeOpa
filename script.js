const jokes = [
  ['Why did the computer go to the doctor?', 'It caught a virus.'],
  ['What does a programmer do at the beach?', 'Surf the web.'],
  ['Why was the math book sad?', 'It had too many problems.'],
  ['What did one wall say to the other?', "I'll meet you at the corner."],
  ["Why can't ghosts tell lies?", 'You can see right through them.'],
  ["What's an astronaut's favorite key?", 'The space bar.']
];
let jokeIndex = 0;
document.querySelector('#next-joke').addEventListener('click', () => {
  jokeIndex = (jokeIndex + 1) % jokes.length;
  document.querySelector('#setup').textContent = jokes[jokeIndex][0];
  document.querySelector('#punchline').textContent = jokes[jokeIndex][1];
});
document.querySelector('#copy-link').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  const url = new URL(window.location.href);
  url.hash = '';
  try {
    await navigator.clipboard.writeText(url.href);
    status.textContent = 'Link copied!';
  } catch {
    status.textContent = `Website address: ${url.href}`;
  }
});
