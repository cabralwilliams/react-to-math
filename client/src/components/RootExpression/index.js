import React from 'react'

function RootExpression({ rootVal, funcArgument }) {
    const showRootExp = !(rootVal <= 2);
    return (
        <span>
            {showRootExp && <sup>{rootVal}</sup>}
            &radic;
            <span className='border-dark border-top'>
                {funcArgument}
            </span>
        </span>
    )
}

export default RootExpression;