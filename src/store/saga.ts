import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_SERVICES_REQUESTED,
  FETCH_SERVICES_SUCCEEDED,
  FETCH_SERVICES_FAILED,
  FETCH_DETAILS_REQUESTED,
  FETCH_DETAILS_SUCCEEDED,
  FETCH_DETAILS_FAILED,
} from './actions';
import type {
  FetchDetailsRequestedAction,
} from './actions';
import type { ServiceListItem, ServiceDetails } from './types';

const API_BASE = 'https://services-list.onrender.com/api';

function* fetchServicesSaga() {
  try {
    const response: Response = yield call(fetch, `${API_BASE}/services`);
    if (!response.ok) throw new Error(`Ошибка ${response.status}`);
    const data: ServiceListItem[] = yield response.json();
    yield put({ type: FETCH_SERVICES_SUCCEEDED, payload: data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Ошибка сети';
    yield put({ type: FETCH_SERVICES_FAILED, payload: message });
  }
}

function* fetchDetailsSaga(action: FetchDetailsRequestedAction) {
  try {
    const response: Response = yield call(
      fetch,
      `${API_BASE}/services/${action.payload}`
    );
    if (!response.ok) throw new Error(`Ошибка ${response.status}`);
    const data: ServiceDetails = yield response.json();
    yield put({ type: FETCH_DETAILS_SUCCEEDED, payload: data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Ошибка сети';
    yield put({ type: FETCH_DETAILS_FAILED, payload: message });
  }
}

export function* rootSaga() {
  yield takeLatest(FETCH_SERVICES_REQUESTED, fetchServicesSaga);
  yield takeLatest(FETCH_DETAILS_REQUESTED, fetchDetailsSaga);
}