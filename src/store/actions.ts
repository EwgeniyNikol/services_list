import type { ServiceListItem, ServiceDetails } from './types';

export const FETCH_SERVICES_REQUESTED = 'FETCH_SERVICES_REQUESTED';
export const FETCH_SERVICES_SUCCEEDED = 'FETCH_SERVICES_SUCCEEDED';
export const FETCH_SERVICES_FAILED = 'FETCH_SERVICES_FAILED';

export const FETCH_DETAILS_REQUESTED = 'FETCH_DETAILS_REQUESTED';
export const FETCH_DETAILS_SUCCEEDED = 'FETCH_DETAILS_SUCCEEDED';
export const FETCH_DETAILS_FAILED = 'FETCH_DETAILS_FAILED';

export interface FetchServicesRequestedAction {
  type: typeof FETCH_SERVICES_REQUESTED;
}

export interface FetchServicesSucceededAction {
  type: typeof FETCH_SERVICES_SUCCEEDED;
  payload: ServiceListItem[];
}

export interface FetchServicesFailedAction {
  type: typeof FETCH_SERVICES_FAILED;
  payload: string;
}

export interface FetchDetailsRequestedAction {
  type: typeof FETCH_DETAILS_REQUESTED;
  payload: number;
}

export interface FetchDetailsSucceededAction {
  type: typeof FETCH_DETAILS_SUCCEEDED;
  payload: ServiceDetails;
}

export interface FetchDetailsFailedAction {
  type: typeof FETCH_DETAILS_FAILED;
  payload: string;
}

export type Action =
  | FetchServicesRequestedAction
  | FetchServicesSucceededAction
  | FetchServicesFailedAction
  | FetchDetailsRequestedAction
  | FetchDetailsSucceededAction
  | FetchDetailsFailedAction;