import { Request, Response } from 'express';
import { createCard, deleteCardById, getAllCards } from 'models/cardModel';
import { logError } from 'utils/logger';



export async function listCards(_req: Request, res: Response) {
    try {
        const cards = await getAllCards();
        res.status(200).json(cards);
    } catch (error) {
        logError('Error adding card:', error); 
        res.status(500).json({ error: 'Failed to fetch cards' });
    }
}


export async function addCard(req: Request, res: Response) {
    const { title, text } = req.body;
    if (!title || !text) {
        res.status(400).json({ error: 'Title and text are required' });
    } else{
    try {
        const card = await createCard(title, text);
        res.status(201).json(card);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add card' });
    }
}
}


export async function removeCard(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
         res.status(400).json({ error: 'Invalid ID' });
    } else{

   
    try {
        const card = await deleteCardById(id);
        if (!card) {
             res.status(404).json({ error: 'Card not found' });
        }else{
            res.status(200).json(card);
        }
        
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete card' });
    }
}
}


