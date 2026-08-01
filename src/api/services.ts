import type { ServiceListItem, ServiceDetails } from '../store/types';

const API_BASE = 'https://services-list.onrender.com/api';

export async function fetchServices(): Promise<ServiceListItem[]> {
  const response = await fetch(`${API_BASE}/services`);
  if (!response.ok) throw new Error(`Ошибка ${response.status}`);
  return response.json();
}

export async function fetchServiceDetails(id: number): Promise<ServiceDetails> {
  const response = await fetch(`${API_BASE}/services/${id}`);
  if (!response.ok) throw new Error(`Ошибка ${response.status}`);
  return response.json();
}