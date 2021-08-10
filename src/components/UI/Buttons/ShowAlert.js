import React from 'react';

const showAlert = props => (!props.show ?
    <button className="showAlert" onClick={props.onClickAlert}>Show alert</button> : null);

export default showAlert;
