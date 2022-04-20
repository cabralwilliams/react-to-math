import React from 'react';
import calc from '../../utils/Calc/calc';

function SvgPoly({ bounds, aCo, zeroArr, lineW, lineFill, interval, opacity }) {
    let pathD = `M${bounds.xStart} `;
    pathD += Math.abs(calc.polyCalcZeroes(bounds.xStart, aCo, zeroArr)) < 0.001 ? 0 : -calc.polyCalcZeroes(bounds.xStart, aCo, zeroArr);
    pathD += " L ";
    let xpos = bounds.xStart;
    while(xpos < bounds.xEnd) {
        xpos += interval;
        const ypos = Math.abs(calc.polyCalcZeroes(xpos, aCo, zeroArr)) < 0.001 ? 0 : calc.polyCalcZeroes(xpos, aCo, zeroArr);
        pathD += `${xpos} ${-ypos} L `;
    }
    pathD += `${bounds.xEnd} `;
    pathD += Math.abs(calc.polyCalcZeroes(bounds.xEnd, aCo, zeroArr)) < 0.001 ? 0 : -calc.polyCalcZeroes(bounds.xEnd, aCo, zeroArr);
    return (
        <path d={pathD} fill='none' stroke={lineFill} strokeWidth={lineW} opacity={opacity}></path>
    )
}

export default SvgPoly;