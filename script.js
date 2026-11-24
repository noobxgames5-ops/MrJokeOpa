const jokes = [
  ['Dlaczego komputer poszedł do lekarza?', 'Bo złapał wirusa.'],
  ['Co robi informatyk na plaży?', 'Szuka sieci.'],
  ['Dlaczego książka z matematyki była smutna?', 'Miała za dużo problemów.'],
  ['Co mówi ściana do ściany?', 'Spotkamy się na rogu.'],
  ['Dlaczego duch nie potrafi kłamać?', 'Bo łatwo go przejrzeć.'],
  ['Jaki jest ulubiony klawisz astronauty?', 'Spacja.']
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
    status.textContent = 'Link skopiowany!';
  } catch {
    status.textContent = `Adres strony: ${url.href}`;
  }
});
