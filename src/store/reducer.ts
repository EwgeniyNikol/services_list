import type { ServicesState } from './types';
import type { Action } from './actions';
import {
  FETCH_SERVICES_REQUESTED,
  FETCH_SERVICES_SUCCEEDED,
  FETCH_SERVICES_FAILED,
  FETCH_DETAILS_REQUESTED,
  FETCH_DETAILS_SUCCEEDED,
  FETCH_DETAILS_FAILED,
} from './actions';

const initialState: ServicesState = {
  list: { data: [], loading: false, error: null },
  details: { data: null, loading: false, error: null },
};

export function servicesReducer(
  state: ServicesState = initialState,
  action: Action
): ServicesState {
  switch (action.type) {
    case FETCH_SERVICES_REQUESTED:
      return {
        ...state,
        list: { ...state.list, loading: true, error: null },
      };
    case FETCH_SERVICES_SUCCEEDED:
      return {
        ...state,
        list: { data: action.payload, loading: false, error: null },
      };
    case FETCH_SERVICES_FAILED:
      return {
        ...state,
        list: { ...state.list, loading: false, error: action.payload },
      };
    case FETCH_DETAILS_REQUESTED:
      return {
        ...state,
        details: { data: null, loading: true, error: null },
      };
    case FETCH_DETAILS_SUCCEEDED:
      return {
        ...state,
        details: { data: action.payload, loading: false, error: null },
      };
    case FETCH_DETAILS_FAILED:
      return {
        ...state,
        details: { ...state.details, loading: false, error: action.payload },
      };
    default:
      return state;
  }
}