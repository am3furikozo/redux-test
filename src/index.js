import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
  asyncIncrement,
  changeTheme,
  decrement,
  disableButtons,
  increment,
} from './redux/actions';
import { rootReducer } from './redux/rootReducer';
import './styles.css';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter;
  document.body.className = state.theme.value;
  [addBtn, removeBtn, asyncBtn, themeBtn].forEach((btn) => {
    btn.disabled = state.buttons.disabled;
  });
});

store.dispatch({ type: 'INIT_APP' });

addBtn.addEventListener('click', () => {
  store.dispatch(increment());
});

removeBtn.addEventListener('click', () => {
  store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement());
});

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
  store.dispatch(changeTheme(newTheme));
});
