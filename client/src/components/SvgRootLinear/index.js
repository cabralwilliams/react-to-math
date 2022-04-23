import React from 'react';
import calc from '../../utils/Calc/calc';

//coefficients = { a, m, b }
//bounds = { xStart, xEnd }
function SvgRootLinear({ rootNumber, coefficients, bounds, interval, lineW, lineFill, opacity }) {
    let newStart = bounds.xStart;
    let newEnd =  bounds.xEnd;
    if(rootNumber%2 === 0) {
        if(coefficients.m*newStart + coefficients.b < 0) {
            if(coefficients.m > 0) {
                newStart = -coefficients.b/coefficients.m;
                newEnd = newStart + (bounds.xEnd - bounds.xStart);
            } else {
                newStart = -coefficients.b/coefficients.m - (bounds.xEnd - bounds.xStart);
                newEnd = -coefficients.b/coefficients.m;
            }
        }
        if(coefficients.m*newEnd + coefficients.b < 0) {
            newEnd = -coefficients.b/coefficients.m;
        }
    }
    let pathStr = `M`;
    let xpos = newStart;
    let ypos = calc.calculateRoot(xpos,coefficients,rootNumber);
    while(xpos < newEnd) {
        pathStr += `${xpos} `
        if(Math.abs(ypos) < 0.0001) {
            ypos = 0;
        }
        pathStr += `${-ypos} L `;
        xpos += interval;
        ypos = calc.calculateRoot(xpos,coefficients,rootNumber);
    }
    ypos = Math.abs(calc.calculateRoot(newEnd,coefficients,rootNumber)) < 0.0001 ? 0 : calc.calculateRoot(newEnd,coefficients,rootNumber);
    pathStr += `${newEnd} ${-ypos}`;
    return (
        <path d={pathStr} stroke={lineFill} strokeWidth={lineW} opacity={opacity} fill='none'></path>
    );
}

export default SvgRootLinear;