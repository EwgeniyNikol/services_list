import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_SERVICES_REQUESTED,
  FETCH_SERVICES_SUCCEEDED,
  FETCH_SERVICES_FAILED,
  FETCH_DETAILS_REQUESTED,
  FETCH_DETAILS_SUCCEEDED,
  FETCH_DETAILS_FAILED,
} from './actions';
import type { FetchDetailsRequestedAction } from './actions';
import type { ServiceListItem, ServiceDetails } from './types';
import { fetchServices, fetchServiceDetails } from '../api/services';

function* fetchServicesSaga() {
  try {
    const data: ServiceListItem[] = yield call(fetchServices);
    yield put({ type: FETCH_SERVICES_SUCCEEDED, payload: data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Ошибка сети';
    yield put({ type: FETCH_SERVICES_FAILED, payload: message });
  }
}

function* fetchDetailsSaga(action: FetchDetailsRequestedAction) {
  try {
    const data: ServiceDetails = yield call(fetchServiceDetails, action.payload);
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