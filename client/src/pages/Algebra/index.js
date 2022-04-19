import React from 'react';
import InfoComponent from '../../components/InfoComponent';
import SvgGraph from '../../components/SvgGraph';
import SvgGrid from '../../components/SvgGrid';
import SvgLine from '../../components/SvgLine';
import SvgQuadStand from '../../components/SvgQuadStand';

function Algebra() {
    const sublinks = [
        {
            linkPath: "linear",
            linkName: "Linear Systems"
        },
        {
            linkPath: "quadratic",
            linkName: "Quadratic Functions"
        },
        {
            linkPath: "polynomials",
            linkName: "Polynomials"
        },
        {
            linkPath: "advanced",
            linkName: "Advanced"
        },
        {
            linkPath: "methods",
            linkName: "Methods"
        }
    ];
    const description = "Algebra is a fairly broad term that is usually used to refer to the recognition and manipulation of basic mathematical symbols.  Virtually every area of mathematics involves some level of algebra.";
    const grid1 = <SvgGrid bounds={{xStart: -80, yStart: -80, xEnd: 80, yEnd: 80, xInterval: 10, yInterval: 10}} lineFill={'black'} lineW={0.75} />;
    const line1 = <SvgLine datapoints={{x1: -80, y1: -50, x2: 80, y2: 70}} lineFill={"red"} lineW={1.25} opacity={0.75} />
    const xAxis = <SvgLine datapoints={{x1: -80, y1: 0, x2: 80, y2: 0}} lineFill={"black"} lineW={1.5} opacity={0.95} />
    const yAxis = <SvgLine datapoints={{x1: 0, y1: -80, x2: 0, y2: 80}} lineFill={"black"} lineW={1.5} opacity={0.95} />
    const quad1 = <SvgQuadStand bounds={{xStart: -45, xEnd: 25}} quadCos={{a: 0.1, b: 2, c: -30}} lineFill={"red"} lineW={1.25} opacity={0.75} interval={0.5} />
    return (
        <div className='d-flex flex-column'>
            <InfoComponent sublinks={sublinks} description={description} title={"Algebra"} />
            <div className='d-flex flex-column pb-4 mb-5 border-bottom border-dark'>
                <div className='d-flex justify-content-evenly align-items-center mb-2'>
                    <h4 id="linear">Linear Systems</h4>
                    <a href='#top' className='nav-link'>Back to Top</a>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <p className='col-10 col-md-8'>
                        Generally, linear systems involve equations or expressions of one or two variables 
                        in which the variables are related by addition (or equivalently subtraction) and 
                        each variable is of the first power.
                    </p>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <h5>Examples</h5>
                        <div><b>Slope-Intercept</b>: <i>y</i> = <b className='text-danger'>m</b><i>x</i> + <b className='text-danger'>b</b></div>
                        <div><b>Standard</b>: <b className='text-danger'>A</b><i>x</i> + <b className='text-danger'>B</b><i>y</i> = <b className='text-danger'>C</b></div>
                        <div><b>Point-Slope</b>: <i>y</i> - <b className='text-danger'>y<sub>1</sub></b> = <b className='text-danger'>m</b>(<i>x</i> - <b className='text-danger'>x<sub>1</sub></b>)</div>
                        <div><b>Single Variable</b>: <b className='text-danger'>m<sub>1</sub></b><i>x</i> + <b className='text-danger'>b<sub>1</sub></b> = <b className='text-danger'>m<sub>2</sub></b><i>x</i> + <b className='text-danger'>b<sub>2</sub></b></div>
                    </div>
                    <p className='col-10 col-md-8'>
                        In the examples above, each instance of <b className='text-danger'>m</b> is the slope 
                        of the given line.  Where present, <b className='text-danger'>b</b> is the <i>y</i>-intercept 
                        of the given line.  Notice that in each case, the <i>x</i> and <i>y</i> variables are to the 
                        first power and are related by just addition and subtraction.  In the Standard example, <b className='text-danger'>-<sup>A</sup>&frasl;<sub>B</sub></b> 
                        is the slope, and <b className='text-danger'><sup>C</sup>&frasl;<sub>B</sub></b> is the <i>y</i>-intercept.
                    </p>
                    <div className='col-10 col-md-6'>
                        <SvgGraph bounds={{ xStart: -100, yStart: -100, width: 200, height: 200 }} childGraphics={[grid1, line1, xAxis, yAxis]} />
                    </div>
                    <p className='col-10 col-md-8'>
                        In the above graph, each box is length 1, and the <i>x</i>-axis and <i>y</i>-axis are in bold.  
                        Below are selected equations for this line.
                    </p>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <div><b>Slope-Intercept</b>: <i>y</i> = <b className='text-danger'><sup>3</sup>&frasl;<sub>4</sub></b><i>x</i> + <b className='text-danger'>1</b></div>
                        <div><b>Standard</b>: <b className='text-danger'>-3</b><i>x</i> + <b className='text-danger'>4</b><i>y</i> = <b className='text-danger'>4</b></div>
                        <div><b>Standard</b>: <b className='text-danger'>6</b><i>x</i> - <b className='text-danger'>8</b><i>y</i> = <b className='text-danger'>-8</b></div>
                        <div><b>Point-Slope</b>: <i>y</i> - <b className='text-danger'>1</b> = <b className='text-danger'><sup>3</sup>&frasl;<sub>4</sub></b>(<i>x</i> - <b className='text-danger'>0</b>)</div>
                        <div><b>Point-Slope</b>: <i>y</i> - <b className='text-danger'>0</b> = <b className='text-danger'><sup>3</sup>&frasl;<sub>4</sub></b>(<i>x</i> - <b className='text-danger'><sup>4</sup>&frasl;<sub>3</sub></b>)</div>
                        <div><b>Point-Slope</b>: <i>y</i> - <b className='text-danger'>4</b> = <b className='text-danger'><sup>3</sup>&frasl;<sub>4</sub></b>(<i>x</i> - <b className='text-danger'>4</b>)</div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column pb-4 mb-5 border-bottom border-dark'>
                <div className='d-flex justify-content-evenly align-items-center mb-2'>
                    <h4 id="quadratic">Quadratic Functions</h4>
                    <a href='#top' className='nav-link'>Back to Top</a>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <p className='col-10 col-md-8'>
                        Quadratic functions involve equations or expressions of one or two variables 
                        in which the variables are related by addition (or equivalently subtraction) and 
                        one variable has a maximum power of 2 while the other has a maximum power of 1.  
                        Generally, the variable <i>y</i> will be to the first power, and <i>x</i> will be 
                        to the second power.
                    </p>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <h5>Examples</h5>
                        <div><b>Standard</b>: <i>y</i> = <b className='text-danger'>a</b><i>x</i><sup>2</sup> + <b className='text-danger'>b</b><i>x</i> + <b className='text-danger'>c</b></div>
                        <div><b>Factored</b>: <i>y</i> = <b className='text-danger'>a</b>(<i>x</i> - <b className='text-danger'>z<sub>1</sub></b>)(<i>x</i> - <b className='text-danger'>z<sub>2</sub></b>)</div>
                        <div><b>Vertex</b>: <i>y</i> = <b className='text-danger'>a</b>(<i>x</i> - <b className='text-danger'>h</b>)<sup>2</sup> + <b className='text-danger'>k</b></div>
                    </div>
                    <p className='col-10 col-md-8'>
                        Each equation above contains an instance of <b className='text-danger'>a</b> - the leading 
                        coefficient of the function.  This coefficient determines how quickly the function rises or 
                        falls.  (If <b className='text-danger'>a</b> is positive, the function opens upward.  
                        If <b className='text-danger'>a</b> is negative, the function opens downward.)  Beyond this, 
                        each of the forms has its advantages.  In the Standard case, <b className='text-danger'>c</b> is 
                        the <i>y</i>-intercept.  In the Factored case, <b className='text-danger'>z<sub>1</sub></b> 
                        and <b className='text-danger'>z<sub>2</sub></b> are the zeroes, or roots, of the function.  In 
                        the Vertex case, (<b className='text-danger'>h</b>, <b className='text-danger'>k</b>) are the 
                        coordinates of the vertex of the function.
                    </p>
                    <div className='col-10 col-md-6'>
                        <SvgGraph bounds={{ xStart: -100, yStart: -100, width: 200, height: 200 }} childGraphics={[grid1, quad1, xAxis, yAxis]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Algebra;