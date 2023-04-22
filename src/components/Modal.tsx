import React from 'react';
import './Modal.css';

interface Props {
    handleClose: any;
    show: boolean;
    header: string;
}

export const Modal: React.FC <Props> = ({handleClose, show, header}) => {
    const showHideClassname = show ? 'show-div' : 'hide-div';
    return (
        <div className={showHideClassname}>
            <div id="instructionsModal" className="modal">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" onClick={handleClose}>×</button>
                <h2>{header}</h2>
            </div>
            <div className="modal-body">         
                <p>
                    Come up with 3-5 tasks you need to do, and give them different ranges of numbers to correspond with numbers on a 20-sided die.
                    The bigger the range, the more important the task. Add one fun activity to be in range 20 - 20, 
                    so that if you roll a 20, the Universe has decided you get to enjoy a fun activity!
                </p>
                <p>
                    Once you've filled in the tasks and number ranges, press 'Roll the die' and let random luck pick your next activity.
                </p>
                <p className="bold">
                    Concept by Dani Donovan of <a href="https://www.adhddd.com/" target="_blank" rel="noreferrer">adhddd.com</a>
                </p>
            </div>
            </div>
        </div>
    </div>
    );
}