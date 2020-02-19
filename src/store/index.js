import { createStore } from 'redux';

const INITIAL_STATE = {
  open: false,
  hqs: [],
  currentPage: 1,
  selected: 1,
  postsPerPage: 8,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'OPEN':
      return { ...state, open: action.value };
    case 'ADD':
      return { ...state, hqs: [...state.hqs, action.value] };
    case 'REMOVE':
      return { ...state, hqs: action.value };
    case 'CURRENT-PAGE':
      return { ...state, currentPage: action.value };
    case 'SELECTED':
      return { ...state, selected: action.value }
    default:
      break;
  }
  return state;
}
const store = createStore(reducer);

export default store;