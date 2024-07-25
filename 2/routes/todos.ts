import { Router } from "express";
const router = Router();

import { Todo } from "../models/todo"; //import todo types interface

let todos: Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos }); //variable todos is implicitely  of type any array here we are not specifying which kind of data in todos so we have to pass and make clear which kind of the data . in  model i am making the interface in models
});

router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  res.status(201).json({message:"Added Todo",todo:newTodo,todos:todos})
});
router.put("/todo/:todoId", (req, res, next) => { 
  const tid = req.params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
    return res.status(200).json({ message: "Updated todo ", todos: todos });
  }
  res.status(404).json({ message: "could not find the todo for this id. " });
});
router.delete('/todo/:todoId',(req,res,next)=>{
todos = todos.filter(todoItem => todoItem.id !== req.params.todoId)
return res.status(200).json({message:"Deleted Todo",todos:todos})
})
// don't have to do module.exports = router butinstead
export default router;
