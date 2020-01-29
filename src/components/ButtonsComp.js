import React from 'react';
// Using npm react-tooltip
import ReactTooltip from 'react-tooltip';
import '../css/buttonStyles.css';

function ButtonsComp(props) {
    return (
        <div >
            <button className="tooltipBtn" id="prevBtn" data-tip data-for="prev" onClick={props.goLeft}>Prev</button>
            <ReactTooltip place="left" id="prev" getContent={() => props.prevWonder} />
            <button className="tooltipBtn" id="nextBtn" data-tip data-for="next" onClick={props.goRight}>Next</button>
            <ReactTooltip place="right" id="next" getContent={() => props.nextWonder} />
        </div>
    )
}

export default ButtonsComp;