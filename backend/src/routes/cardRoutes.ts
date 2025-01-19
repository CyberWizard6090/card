import express from 'express';
import { addCard, removeCard, listCards } from 'controllers/cardController';

const router = express.Router();

// Маршруты для работы с карточками
router.get('/cards', listCards);     // Получить все карточки
router.post('/cards', addCard);       // Добавить карточку
router.delete('/cards/:id', removeCard); // Удалить карточку


export default router;
