import { createCard as apiCreateCard } from "entities/Card";

export const useAddCard = () => {
  const createCard = async (payload: { title: string; text: string }) => {
    try {
      await apiCreateCard(payload);
    } catch (error) {
      console.error(error);
    }
  };

  return { createCard };
};
