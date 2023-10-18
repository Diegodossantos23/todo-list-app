import React, { useState } from 'react';

interface Task {
    id: number;
    task: string;
    completed: boolean;
}

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');

    return (
        <div>
            Lista de tarefas
        </div>
    )
}
export default TaskList;
