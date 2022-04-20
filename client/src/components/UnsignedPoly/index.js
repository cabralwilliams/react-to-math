import React from 'react'

function UnsignedPoly({ coefficient, exponent, variable }) {
    //Potentially add prop to pass classes to the embedded elements
    const isEqualOne = Math.abs(coefficient) === 1;
    const exponentIsOne = exponent === 1;
    return (
        <span>
            {!isEqualOne && <span>{Math.abs(coefficient)}</span>}
            <i>{variable}</i>
            {!exponentIsOne && <sup>{exponent}</sup>}
        </span>
    )
}

export default UnsignedPoly;