import React from 'react';
import './scroll.css';

const Scroll = (props) => {
    return (
        <div className="scroll" style={{overflowY:'scroll',marginTop:'20vh', float:'center'}}>     
            {props.children}
        </div>
    );
}

export default Scroll;