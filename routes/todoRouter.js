const express = require('express')
const router = express.Router(); // for using router
const { addOneTodo, getAllTodos, updateTodo, deleteTodo } = require('../controllers/todoControllers')

router.get('/', getAllTodos);
router.post('/', addOneTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;