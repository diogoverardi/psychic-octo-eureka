import {getTodos} from '../services/todoService.js';

/**
 * Retrieves all items from the database.
 * @returns An array of todo items.
*/
export const getAllTodos = async (req, res, next) => {
  try {
    const todos = await getTodos();
    res.json({body: todos});
  } catch (error) {
    next(error);
  }
};
