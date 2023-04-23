import React, { useState } from 'react';
import './TaskListEntry.css'

interface Props {
    onAddTask: Function;
}

export const TaskListEntry: React.FC <Props> = ({onAddTask}) => {
    const [startRange, setStartRange] = useState("");
    const [endRange, setEndRange] = useState("");
    const [text, setText] = useState('');

    const addTaskAndReset = () => {
        setText('');
        setStartRange('');
        setEndRange('');
        onAddTask(text, startRange, endRange);
    }

    const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && text && startRange && endRange) {
            addTaskAndReset();
        }
    };
   
    return (
        <>
            <input
                className="input inputName"
                placeholder="Task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleEnterKeyPress}
            />
            <input
                className="input inputNumber"
                placeholder="Starting number"
                type="number" min="1" max="20"
                value={startRange}
                onChange={(e) => setStartRange(e.target.value)}
                onKeyDown={handleEnterKeyPress}
            />
            <input
                className="input inputNumber"
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
        </>
        );
    }