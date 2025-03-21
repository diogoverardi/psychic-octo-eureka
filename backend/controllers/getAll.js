import {getTodos} from '../services/todoService.js';

export const getAllTodos = async (req, res, next) => {
  try {
    const todos = await getTodos();
    res.json({body: todos});
  } catch (error) {
    next(error);
  }
};
