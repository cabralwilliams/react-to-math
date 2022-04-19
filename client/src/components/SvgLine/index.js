import React from 'react'

function SvgLine({ datapoints, lineW, lineFill, opacity }) {
    return (
        <line x1={datapoints.x1} y1={-datapoints.y1} x2={datapoints.x2} y2={-datapoints.y2} strokeWidth={lineW} stroke={lineFill} opacity={opacity}></line>
    )
}

export default SvgLine;