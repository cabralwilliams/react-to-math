import React from 'react';
import UnsignedPoly from '../UnsignedPoly';

function PolyElement({ coefficients, variable }) {
    //Will hold the signs that come between the terms
    const signArr = [];
    const deg = coefficients.length - 1;
    const jsxEls = [];
    //Populate arrays with JSX elements
    for(let i = 0; i < coefficients.length; i++) {
        if(coefficients[i] !== 0) {
            if(i === 0) {
                if(coefficients[i] < 0) {
                    signArr.push(<span>-</span>);
                } else {
                    signArr.push(<span></span>);
                }
                jsxEls.push(<UnsignedPoly coefficient={coefficients[i]} exponent={deg - i} variable={variable} />);
            } else if(i === coefficients.length - 1) {
                if(coefficients[i] < 0) {
                    signArr.push(<span> - </span>);
                } else {
                    signArr.push(<span> + </span>);
                }
                jsxEls.push(<span>{Math.abs(coefficients[i])}</span>);
            } else {
                if(coefficients[i] < 0) {
                    signArr.push(<span> - </span>);
                } else {
                    signArr.push(<span> + </span>);
                }
                jsxEls.push(<UnsignedPoly coefficient={coefficients[i]} exponent={deg - i} variable={variable} />);
            }
        }
    }
    //Join two JSX arrays
    const outputEls = [];
    for(let i = 0; i < signArr.length; i++) {
        outputEls.push(signArr[i], jsxEls[i]);
    }
    return (
        <span>
            {outputEls.map((el, i) => <span key={i}>{el}</span>)}
        </span>
    )
}

export default PolyElement;