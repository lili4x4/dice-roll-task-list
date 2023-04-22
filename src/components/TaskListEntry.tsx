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
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleEnterKeyPress}
            />
            <input
                placeholder="Starting number"
                value={startRange}
                onChange={(e) => setStartRange(e.target.value)}
                onKeyDown={handleEnterKeyPress}
            />
                        <input
                placeholder="Ending number"
                value={endRange}
                onChange={(e) => setEndRange(e.target.value)}
                onKeyDown={handleEnterKeyPress}
            />
            <button
                className="button buttonPrimary"
                onClick={addTaskAndReset}>
                Add
            </button>
        </>
        );
    }