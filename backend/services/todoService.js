import Todo from '../models/schema.js';

export const getTodos = async () => {
  return await Todo.find({}, '-_id id name isComplete');
};

export const createTodo = async (id, name) => {
  const newTodo = new Todo({id, name});
  return await newTodo.save();
};

export const updateTodo = async (id, name, isComplete) => {
  return await Todo.findOneAndUpdate(
    {id},
    {name, isComplete, updatedAt: Date.now()},
    {new: true, projection: '-_id id name isComplete'}
  );
};

export const deleteTodo = async (id) => {
  return await Todo.findOneAndDelete({id});
};