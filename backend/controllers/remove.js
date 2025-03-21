import {deleteTodo} from '../services/todoService.js';

/**
* Deletes a TODO item from the database.
* @param {string} id - ID of the item to be deleted.
* @returns The deleted todo item, or null if not found.
*/
export const removeTodo = async (req, res, next) => {
  try {
    const {id} = req.params;
    if (!id) {
      return res.status(400).json({error: 'ID is required to delete an item.'});
    }

    const deletedTodo = await deleteTodo(id);
    if (!deletedTodo) {
      return res.status(404).json({error: `Item ${id} not found.`});
    }
    
    res.json({body:{message: `The item ${id} has been successfully deleted.`}});
  } catch (error) {
    next(error);
  }
};
