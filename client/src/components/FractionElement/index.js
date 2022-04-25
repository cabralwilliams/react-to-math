import React from 'react'

function FractionElement({ numeratorEl, denominatorEl, longerNumerator }) {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className={longerNumerator && 'border-dark border-bottom'}>
                {numeratorEl}
            </div>
            <div className={!longerNumerator && 'border-dark border-top'}>
                {denominatorEl}
            </div>
        </div>
    )
}

export default FractionElement;