import React, { useState } from 'react';
import { TaskListEntry } from './TaskListEntry';
import { TaskList } from './TaskList';

interface taskList {
    id: number;
    name: string;
    start: number;
    end: number;
}

export const DiceRoll: React.FC = () => {
    const [dice, setDice] = useState<string>("");
    const [taskList, setTaskList] = useState<taskList[]>([]);
    const [taskId, setTaskId] = useState<number>(0);
    const [taskMessage, setTaskMessage] = useState<string>("");
    
    const handleAddTask = (taskName: string, startRange: number, endRange: number) => {
        setTaskList ([
            ...taskList,
            {
                id: taskId,
                name: taskName,
                start: startRange,
                end: endRange
            }
        ]);
        setTaskId(taskId + 1);
    }

    const handleDeleteTask = (taskId: number) => {
        setTaskList(taskList.filter((t) => t.id !== taskId));
    }
    
    function handleChangeTask(task: taskList) {
        setTaskList(
            taskList.map((t) => {
                if (t.id === task.id) {
                    return task;
                } else {
                    return t;
                }
            })
        );
    }

    const taskMessageFunc = (roll: number) => {
        let taskMessage = ""
        for (let i=0; i < taskList.length; i++) {
            if (roll >= taskList[i].start && roll <= taskList[i].end) {
                const task = taskList[i].name;
                if (roll === 20) {
                    taskMessage = `You rolled a 20! Time to do a fun task: ${task}`;
                } else {
                    taskMessage = `Fate has decided! Time to do task: ${task}`;
                }
            }
        }
        return taskMessage;
    }
    
    const roll = () => {
        const diceRoll = Math.floor(Math.random() * 20) + 1;
        setDice(diceRoll.toString());
        setTaskMessage(taskMessageFunc(diceRoll));
    };


    return (
        <div>
            <TaskListEntry onAddTask={handleAddTask} />
            <br />
            {taskList.length > 0 &&
                <TaskList
                    tasks={taskList}
                    onChangeTask={handleChangeTask}
                    onDeleteTask={handleDeleteTask}
                />
            }
            <br />
            {taskList.length > 0 &&
                <div>
                    <button type="button" className="button buttonPrimary" onClick={roll}>Roll the die</button>
                    <h3>{dice}</h3>
                    <h4>{taskMessage}</h4>
                </div>
            }
        </div>
    )
}