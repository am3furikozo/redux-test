import './styles.css';

const couter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

let state = 0;

function render() {
  couter.textContent = state.toString();
}

addBtn.addEventListener('click', () => {
  state++;
  render();
});

removeBtn.addEventListener('click', () => {
  state--;
  render();
});

asyncBtn.addEventListener('click', () => {
  setTimeout(() => {
    state++;
    render();
  }, 2000);
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

render();
