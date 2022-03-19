const TodoModel = require('../models/TodoModel');

exports.getAllTodos = async (req, res) => {
    try {
        const allTodos = await TodoModel.findAll();
        res.status(200).send(allTodos);
    } catch (error) {
        console.log(error)
    }
}

exports.addOneTodo = async (req, res) => {
    try {
        const { todo, urgent } = req.body;
        if (todo) {
            await TodoModel.create({ todo: todo, urgent: urgent })
            res.status(200).json({ message: 'success' });
        } else {
            res.status(400).json({ message: 'bad request' })
        }
    } catch (err) {
        console.log(err)
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { todo } = req.body;
        await TodoModel.update(
            { todo: todo },
            {
                where: {
                    id: id
                }
            }
        );
        res.status(200).json({
            message: 'success'
        });
    } catch (err) {
        console.log(err);
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todoToDelete = await TodoModel.findByPk(id);
        todoToDelete.destroy();
        res.status(200).json({ message: 'destroyed' });
    } catch (error) {
        console.log(error);
    }
}