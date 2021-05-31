import { combineReducers } from 'redux';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const InitialThemeState = {
  value: 'light',
};

function themeReducer(state = InitialThemeState, action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, value: action.payload };
    default:
      return state;
  }
}

const initialButtonsState = {
  disabled: false,
};

function buttonsReducer(state = initialButtonsState, action) {
  switch (action.type) {
    case 'ENABLE_BUTTONS':
      return { ...state, disabled: false };
    case 'DISABLE_BUTTONS':
      return { ...state, disabled: true };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  buttons: buttonsReducer,
});
