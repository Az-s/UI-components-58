import React from 'react';

const ShowBtn = props => (!props.show ?
    <button className="showAlert" onClick={props.onClickBtn}>Show Alert</button> : null);

export default ShowBtn;
