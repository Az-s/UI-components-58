import React from 'react';

const ShowBtn = props => (!props.show ?
    <button className="showAlert" onClick={props.onClickBtn}>Show Modal</button> : null);

export default ShowBtn;
