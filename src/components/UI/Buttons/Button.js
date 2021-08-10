import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <div className='btns'>
            <button
                onClick={props.onClick}
                className={['Button', props.type].join(' ')}
            >
                {props.label}
            </button>
        </div>
    )
}

export default Button;
