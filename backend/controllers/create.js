import {createTodo} from '../services/todoService.js';

/**
* Creates a new item and saves it to the database.
* @param {string} id - UUID provided by the frontend in the request.
* @param {string} name
* @returns The created item.
*/
export const addTodo = async (req, res, next) => {
  try {
    if (
        !req.body || 
        (typeof req.body === "string" && req.body.trim() === "") || 
        (typeof req.body === "object" && Object.keys(req.body).length === 0)
      ) {
        return res.status(400).json({ error: "Request data is missing." });
      }
    
    const {id, name} = JSON.parse(req.body);
    if (!name || !id) {
      return res.status(400).json({error: "ID and Name are required to create a new item."});
    }

    const newTodo = await createTodo(id, name);

    res.status(201).json({body: {id: newTodo.id, name: newTodo.name, isComplete: newTodo.isComplete}});
  } catch (error) {
    next(error);
  }
};
