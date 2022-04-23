import React from 'react'

function RationalExpression2({ numerator, denominator }) {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div>
                {numerator}
            </div>
            <div className='border-dark border-top'>
                {denominator}
            </div>
        </div>
    )
}

export default RationalExpression2;