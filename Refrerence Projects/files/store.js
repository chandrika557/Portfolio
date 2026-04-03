import { createStore } from 'redux';
import { policies } from '../data/policies';

// Action Types
export const SET_FILTER = 'SET_FILTER';
export const SET_SORT = 'SET_SORT';
export const SET_SEARCH = 'SET_SEARCH';
export const SELECT_POLICY = 'SELECT_POLICY';

// Action Creators
export const setFilter = (filter) => ({ type: SET_FILTER, filter });
export const setSort = (sort) => ({ type: SET_SORT, sort });
export const setSearch = (search) => ({ type: SET_SEARCH, search });
export const selectPolicy = (id) => ({ type: SELECT_POLICY, id });

// Initial State
const initialState = {
  policies,
  filter: 'All',
  sort: 'newest',
  search: '',
  selectedPolicyId: null,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.filter };
    case SET_SORT:
      return { ...state, sort: action.sort };
    case SET_SEARCH:
      return { ...state, search: action.search };
    case SELECT_POLICY:
      return { ...state, selectedPolicyId: action.id };
    default:
      return state;
  }
};

export const store = createStore(reducer);
