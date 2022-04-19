import React from 'react'

//bounds = { xStart, yStart, xEnd, yEnd, xInterval, yInterval }
function SvgGrid({ bounds, lineW, lineFill }) {

    const vertLine = (x,y1,y2) => {
        return <line x1={x} y1={-y1} x2={x} y2={-y2} stroke={lineFill} strokeWidth={lineW} />;
    }
    const horzLine = (x1,x2,y) => {
        return <line x1={x1} y1={-y} x2={x2} y2={-y} stroke={lineFill} strokeWidth={lineW} />;
    }

    const gridLines = [];
    for(let i = bounds.xStart; i <= bounds.xEnd; i += bounds.xInterval) {
        gridLines.push(vertLine(i,bounds.yStart,bounds.yEnd));
    }
    for(let i = bounds.yStart; i <= bounds.yEnd; i += bounds.yInterval) {
        gridLines.push(horzLine(bounds.xStart,bounds.xEnd,i));
    }
    return (
        <g>
            {
                gridLines.map((gridline, i) => gridline)
            }
        </g>
    );
}

export default SvgGrid;