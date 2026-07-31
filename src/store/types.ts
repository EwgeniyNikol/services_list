export interface ServiceListItem {
  id: number;
  name: string;
  price: number;
}

export interface ServiceDetails {
  id: number;
  name: string;
  price: number;
  content: string;
}

export interface ServicesState {
  list: {
    data: ServiceListItem[];
    loading: boolean;
    error: string | null;
  };
  details: {
    data: ServiceDetails | null;
    loading: boolean;
    error: string | null;
  };
}

export type RootState = ServicesState;