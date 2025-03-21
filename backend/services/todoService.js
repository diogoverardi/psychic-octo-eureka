import Todo from '../models/schema.js';

/**
 * Retrieves all TODO items from the database.
 * @returns An array of todo items.
 */
export const getTodos = async () => {
  return await Todo.find({}, '-_id id name isComplete');
};

/**
 * Creates a new TODO item and saves it to the database.
 * @param {string} id 
 * @param {string} name 
 * @returns The created todo item.
 */
export const createTodo = async (id, name) => {
  const newTodo = new Todo({id, name});
  return await newTodo.save();
};

/**
* Updates an existing item in the database.
* @param {string} id
* @param {string} name
* @param {boolean|undefined} isComplete if undefined then False will be set.
* @returns The updated todo item, or null if not found.
*/
export const updateTodo = async (id, name, isComplete) => {
  return await Todo.findOneAndUpdate(
    {id},
    {name, isComplete, updatedAt: Date.now()},
    {new: true, projection: '-_id id name isComplete'}
  );
};

/**
* Deletes an item from the database.
* @param {string} id of the item to be deleted.
* @returns The deleted item, or null if not found.
*/
export const deleteTodo = async (id) => {
  return await Todo.findOneAndDelete({id});
};