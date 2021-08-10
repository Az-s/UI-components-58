import React from 'react';
import './Alert.css';

const Alert = (props) => {
    return (
        <>
            <div onClick={props.type === 'danger' ? props.onClick : null}
                className={['Alert', props.type].join(' ')}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                <div className={props.type}>This is a {props.type} type Alert</div>
                {props.type !== 'danger' ? <button onClick={props.close} dismiss={props.dismiss}>&#10006;</button>: console.log(props.type)}
            </div>
        </>
    )
}

export default Alert;
