import React, { useState } from 'react';
import './TaskList.css'

interface taskList {
    id: number;
    name: string;
    start: number;
    end: number;
}

interface TaskListProps {
    tasks: taskList[];
    onChangeTask: Function;
    onDeleteTask: Function;
}

interface TaskProps {
    task: taskList;
    onChange: Function;
    onDelete: Function;
}

export const TaskList: React.FC <TaskListProps> = ({tasks, onChangeTask, onDeleteTask}) => {
    return (
        <div className='center'>
            <h4>Tasks</h4>
            <div className='taskTitle'>
                <p className='taskTitle1'>Task Name</p>
                <p className='taskTitle2'>Range</p>
            </div>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                ))}
        </div>
    );
}

const Task: React.FC <TaskProps> = ({task, onChange, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
        <div id='editTask'>
            <input
            value={task.name}
            onChange={(e) => {
                onChange({
                ...task,
                name: e.target.value,
                });
            }}
            />
            <input
            value={task.start}
            onChange={(e) => {
                onChange({
                ...task,
                start: e.target.value,
                });
            }}
            />
            <input
            value={task.end}
            onChange={(e) => {
                onChange({
                ...task,
                end: e.target.value,
                });
            }}
            />
            <button className="button buttonPrimary" onClick={() => setIsEditing(false)}>Save</button>
        </div>
        );
    } else {
        taskContent = (
        <>
            <div className='taskContent'>
                <p className='taskContentItem1'>{task.name}</p>
                <p className='taskContentItem2'>{task.start}-{task.end}</p>
                <div className='taskContentItem3'>
                    <button className='button buttonPrimary' onClick={() => setIsEditing(true)}>Edit</button>
                    <button className="button buttonSecondary" onClick={() => onDelete(task.id)}>Delete</button>
                </div>
            </div>
        </>
        );
    }
    return (
        <>
            <div className='center' >
            <label className='taskList'>
            <div className='taskListItem1'>
                {taskContent}
            </div>
            </label>
            </div>
        </>
    );
    }