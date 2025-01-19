import { CardType, CreateCardPayload } from "../types";



const API_BASE_URL = "http://localhost:5000/api/cards";

export const fetchCards = async (): Promise<CardType[]> => {
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch cards');
  }
  return response.json();
};

export const createCard = async (data: CreateCardPayload): Promise<CardType> => {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to create card');
  }
  return response.json();
};

export const deleteCard = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Failed to delete card');
  }
};
