import React from 'react';

function RationalExpression({ numerator, denominator }) {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='border-dark border-bottom'>
                {numerator}
            </div>
            <div>
                {denominator}
            </div>
        </div>
    )
}

export default RationalExpression;