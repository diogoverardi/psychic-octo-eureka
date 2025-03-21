import {updateTodo} from '../services/todoService.js';

export const editTodo = async (req, res, next) => {
  try {
    const {id} = req.params;
    if (!id) {
      return res.status(404).json({error: 'ID is required to modify an item.'});
    }

    if (
      !req.body || 
      (typeof req.body === "string" && req.body.trim() === "") || 
      (typeof req.body === "object" && Object.keys(req.body).length === 0)
    ) {
      return res.status(400).json({error: "Request data is missing."});
    }

    const {name, isComplete} = JSON.parse(req.body);
    const updatedTodo = await updateTodo(id, name, isComplete);
    
    if (!updatedTodo) {
      return res.status(404).json({error: `Item ${id} not found`});
    }

    res.json({body: {id: updatedTodo.id, name: updatedTodo.name, isComplete: updatedTodo.isComplete}}); 
  } catch (error) {
    next(error);
  }
};