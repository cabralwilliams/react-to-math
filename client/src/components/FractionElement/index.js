import React from 'react'

function FractionElement({ numeratorEl, denominatorEl, longerNumerator }) {
    const numeratorClass = longerNumerator ? 'border-dark border-bottom' : "";
    const denominatorClass = !longerNumerator ? 'border-dark border-bottom' : "";
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className={numeratorClass}>
                {numeratorEl}
            </div>
            <div className={denominatorClass}>
                {denominatorEl}
            </div>
        </div>
    )
}

export default FractionElement;