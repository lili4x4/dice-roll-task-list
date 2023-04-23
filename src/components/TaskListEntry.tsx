import React, { useState } from 'react';
import './TaskListEntry.css'
import '../App.css'

interface Props {
    onAddTask: Function;
}

export const TaskListEntry: React.FC <Props> = ({onAddTask}) => {
    const [startRange, setStartRange] = useState("");
    const [endRange, setEndRange] = useState("");
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const addTaskAndReset = () => {
        // Check all inputs are valid
        if (text && startRange && Number.isInteger(parseFloat(startRange)) && endRange && Number.isInteger(parseFloat(endRange))) {
            const taskNameInput = document.getElementById("taskNameInput");
            setErrorMessage("");
            setText('');
            setStartRange('');
            setEndRange('');
            onAddTask(text, startRange, endRange);
            taskNameInput!.focus();
        } else {
            setErrorMessage("Please fill in the task name, starting number, and ending number");
        }
    
    }

    const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const taskNameInput = document.getElementById("taskNameInput");
        const taskStartNum = document.getElementById("taskStartNum");
        const taskEndNum = document.getElementById("taskEndNum");
        if ((e.key === 'Enter') && (taskNameInput === document.activeElement || taskStartNum === document.activeElement || taskEndNum === document.activeElement)) {
            console.debug("hey",startRange, endRange);
            addTaskAndReset();
        } 
    };
   
    return (
        <>
            <input
                className="input inputName"
                id="taskNameInput"
                placeholder="Task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleEnterKeyPress}
            />
            <input
                className="input inputNumber"
                id="taskStartNum"
                placeholder="Starting number"
                type="number" min="1" max="20"
                value={startRange}
                onChange={(e) => setStartRange(e.target.value)}
                onKeyDown={handleEnterKeyPress}
            />
            <input
                className="input inputNumber"
                id="taskEndNum"
                placeholder="Ending number"
                type="number" min="1" max="20"
                value={endRange}
                onChange={(e) => setEndRange(e.target.value)}
                onKeyDown={handleEnterKeyPress}
            />
            <button
                className="button buttonPrimary addButton"
                onClick={addTaskAndReset}>
                Add
            </button>
            <br />
            <p className="errorMessage">{errorMessage}</p>
        </>
        );
    }