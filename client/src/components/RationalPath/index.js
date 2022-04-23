import React from 'react'
import calc from '../../utils/Calc/calc';

//bounds = {xStart, xEnd, yMax = 100?, yMin = -100?, threshhold: 0.0005 }
//yMax and yMin are what the y-value will be set to if going outside that range
function RationalPath({ numZeroes, denZeroes, leadingCos, bounds, lineW, lineFill, opacity, interval }) {
    const pathSegments = [];
    const holeLocations = calc.fillHoles(numZeroes,denZeroes,leadingCos.num,leadingCos.den);
    let xpos = bounds.xStart;
    let ypos;
    let currentPath = "M";
    while(xpos < bounds.xEnd) {
        let asymptotic = calc.isAsymptotic(numZeroes,denZeroes,xpos,bounds.threshhold);
        // if(Math.abs(xpos - 1) < 0.1) {
        //     console.log(`X-Value: ${xpos}`);
        //     console.log(`Rounded X-Value: ${Math.round(xpos)}`);
        //     console.log(`Denominator Zeroes: ${denZeroes}`);
        //     console.log(`Asymptotic Status: ${asymptotic}`);
        //     console.log(`Denominator Value at 1: ${calc.polyCalcZeroes(xpos,leadingCos.den,denZeroes)}`);
        // }
        if(asymptotic) {
            currentPath += `${xpos} `;
            let tempY;
            if(calc.polyCalcZeroes(xpos - 0.001,leadingCos.num,numZeroes)/calc.polyCalcZeroes(xpos - 0.001,leadingCos.den,denZeroes) < 0) {
                tempY = bounds.yMin;
            } else {
                tempY = bounds.yMax;
            }
            currentPath += `${-tempY}`;
            //push the value into the pathSegments array and start a new currentPath
            pathSegments.push(currentPath);
            currentPath = `M${xpos} `;
            if(calc.polyCalcZeroes(xpos + 0.001,leadingCos.num,numZeroes)/calc.polyCalcZeroes(xpos + 0.001,leadingCos.den,denZeroes) < 0) {
                tempY = bounds.yMin;
            } else {
                tempY = bounds.yMax;
            }
            currentPath += `${-tempY} L `;
        } else if(calc.polyCalcZeroes(xpos,leadingCos.den,denZeroes) === 0) {
            //If both numerator and denominator go to zero but not asymptotic - go just beyond the xpos to get a y-value
            let tempY = calc.polyCalcZeroes(xpos + 0.001,leadingCos.num,numZeroes)/calc.polyCalcZeroes(xpos + 0.001,leadingCos.den,denZeroes);
            tempY = Math.abs(tempY < 0.0001) ? 0 : tempY;
            currentPath += `${xpos} ${-tempY} L `;
            //push this hole value into holeLocations
            // holeLocations.push([xpos,tempY]);
        } else {
            //Standard value
            ypos = calc.polyCalcZeroes(xpos,leadingCos.num,numZeroes)/calc.polyCalcZeroes(xpos,leadingCos.den,denZeroes);
            if(Math.abs(ypos) < 0.0001) {
                ypos = 0;
            } else if(ypos > bounds.yMax) {
                ypos = bounds.yMax;
            } else if(ypos < bounds.yMin) {
                ypos = bounds.yMin;
            }
            currentPath += `${xpos} ${-ypos} L `;
        }
        //increment xpos
        xpos += interval;
    }
    //Check to see if final x-position is asymptotic
    currentPath += `${bounds.xEnd} `;
    if(calc.isAsymptotic(numZeroes,denZeroes,bounds.xEnd,bounds.yMax)) {
        if(calc.polyCalcZeroes(bounds.xEnd - 0.001,leadingCos.num,numZeroes)/calc.polyCalcZeroes(bounds.xEnd - 0.001,leadingCos.den,denZeroes) < 0) {
            currentPath += `${-bounds.yMin}`;
        } else {
            currentPath += `${-bounds.yMax}`;
        }
    } else if(calc.polyCalcZeroes(bounds.xEnd,leadingCos.den,denZeroes) === 0) {
        //If both numerator and denominator go to zero but not asymptotic - go just beyond the xpos to get a y-value
        let tempY = calc.polyCalcZeroes(bounds.xEnd + 0.001,leadingCos.num,numZeroes)/calc.polyCalcZeroes(bounds.xEnd + 0.001,leadingCos.den,denZeroes);
        tempY = Math.abs(tempY < 0.0001) ? 0 : tempY;
        currentPath += `${-tempY}`;
        //push this hole value into holeLocations
        // holeLocations.push(bounds.xEnd);
    } else {
        //Real value for the function
        //Standard value
        ypos = calc.polyCalcZeroes(bounds.xEnd,leadingCos.num,numZeroes)/calc.polyCalcZeroes(bounds.xEnd,leadingCos.den,denZeroes);
        if(Math.abs(ypos) < 0.0001) {
            ypos = 0;
        } else if(ypos > bounds.yMax) {
            ypos = bounds.yMax;
        } else if(ypos < bounds.yMin) {
            ypos = bounds.yMin;
        }
        currentPath += `${-ypos}`;
    }
    pathSegments.push(currentPath);
    return (
        <g>
            {pathSegments.map((segment, i) => {
                return(
                    <path key={i} d={segment} stroke={lineFill} strokeWidth={lineW} opacity={opacity} fill='none' />
                )
            })}
            {
                holeLocations.map((hole, i) => {
                    return(
                        <circle cx={hole[0]} cy={-hole[1]} r="0.35" stroke={lineFill} strokeWidth="0.15" fill='white' key={i} opacity="0.75" />
                    )
                })
            }
        </g>
    )
}

export default RationalPath;