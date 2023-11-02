const connection = require('./connection');

const getAllTasks = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');

  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const date = new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ');

  const [createTask] = await connection.execute('INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)', [title, 'pendente', date]);

  return { insertId: createTask.insertId };
};

const deleteTask = async (id) => {
  const [removeTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);

  return removeTask;
};

const updateTask = async (id, task) => {
  const { title, status } = task;
  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

  const [updatedTask] = await connection.execute(query, [title, status, id]);

  return updatedTask;
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask
};
