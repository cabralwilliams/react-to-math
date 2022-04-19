import React from 'react'

function SvgQuadStand({ bounds, quadCos, lineW, lineFill, interval, opacity }) {
    const calcQuadratic = (a,b,c,x) => {
        return a*x*x + b*x + c;
    }
    let pathD = `M${bounds.xStart} ${-calcQuadratic(quadCos.a,quadCos.b,quadCos.c,bounds.xStart)} L `;
    let xpos = bounds.xStart;
    while(xpos < bounds.xEnd) {
        xpos += interval;
        pathD += `${xpos} ${-calcQuadratic(quadCos.a,quadCos.b,quadCos.c,xpos)} L `;
    }
    pathD += `${bounds.xEnd} ${-calcQuadratic(quadCos.a,quadCos.b,quadCos.c,bounds.xEnd)}`;

    return (
        <path d={pathD} stroke={lineFill} strokeWidth={lineW} opacity={opacity} fill="none"></path>
    )
}

export default SvgQuadStand;