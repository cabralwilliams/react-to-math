import React from 'react'

//bounds = { xStart, yStart, width, height }
function SvgGraph({ bounds, childGraphics }) {
    return (
        <svg  version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox={`${bounds.xStart} ${bounds.yStart} ${bounds.width} ${bounds.height}`}>
            {
                childGraphics.map((childGraphic, i) => childGraphic)
            }
        </svg>
    );
}

export default SvgGraph;