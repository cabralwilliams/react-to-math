import React from 'react';
import InfoComponent from '../../components/InfoComponent';
import SvgGraph from '../../components/SvgGraph';
import SvgGrid from '../../components/SvgGrid';
import SvgLine from '../../components/SvgLine';
import SvgQuadStand from '../../components/SvgQuadStand';
import SvgPoly from '../../components/SvgPoly';
import PolyElement from '../../components/PolyElement';
import calc from '../../utils/Calc/calc';

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
    const grid2 = <SvgGrid bounds={{xStart: -10, yStart: -10, xEnd: 10, yEnd: 10, xInterval: 1, yInterval: 1}} lineFill={'black'} lineW={0.15} />;
    const grid3 = <SvgGrid bounds={{xStart: -15, yStart: -15, xEnd: 15, yEnd: 15, xInterval: 1, yInterval: 1}} lineFill={'black'} lineW={0.15} />;
    const line1 = <SvgLine datapoints={{x1: -80, y1: -50, x2: 80, y2: 70}} lineFill={"red"} lineW={1.25} opacity={0.75} />
    const xAxis = <SvgLine datapoints={{x1: -80, y1: 0, x2: 80, y2: 0}} lineFill={"black"} lineW={1.5} opacity={0.95} />
    const yAxis = <SvgLine datapoints={{x1: 0, y1: -80, x2: 0, y2: 80}} lineFill={"black"} lineW={1.5} opacity={0.95} />
    const quad1 = <SvgQuadStand bounds={{xStart: -45, xEnd: 25}} quadCos={{a: 0.1, b: 2, c: -30}} lineFill={"red"} lineW={1.25} opacity={0.75} interval={0.5} />
    const quad2 = <SvgQuadStand bounds={{xStart: -25, xEnd: 45}} quadCos={{a: -0.1, b: 2, c: 30}} lineFill={"blue"} lineW={1.25} opacity={0.75} interval={0.5} />
    const xAxis_1 = <SvgLine datapoints={{x1: -15, y1: 0, x2: 15, y2: 0}} lineFill={"black"} lineW={0.25} opacity={0.95} />
    const yAxis_1 = <SvgLine datapoints={{x1: 0, y1: -15, x2: 0, y2: 15}} lineFill={"black"} lineW={0.25} opacity={0.95} />
    const poly1 = <SvgPoly bounds={{xStart: -6, xEnd: 6}} zeroArr={[-4,-1,2,3]} aCo={0.25} lineFill={"red"} lineW={0.25} opacity={0.95} interval={0.1} />
    const poly2 = <SvgPoly bounds={{xStart: -6, xEnd: 6}} zeroArr={[-4,-1,-1,5]} aCo={-0.05} lineFill={"blue"} lineW={0.25} opacity={0.95} interval={0.1} />
    const poly3 = <SvgPoly bounds={{xStart: -10, xEnd: 10}} zeroArr={[-7,-3,4,4,4]} aCo={-0.005} lineFill={"green"} lineW={0.25} opacity={0.95} interval={0.1} />
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
                        first power and are related by just addition and subtraction.  In the Standard example, <b className='text-danger'>-<sup>A</sup>&frasl;<sub>B</sub></b> is 
                        the slope, and <b className='text-danger'><sup>C</sup>&frasl;<sub>B</sub></b> is the <i>y</i>-intercept.
                    </p>
                    <div className='col-10 col-md-6'>
                        <SvgGraph bounds={{ xStart: -100, yStart: -100, width: 200, height: 200 }} childGraphics={[grid1, line1, xAxis, yAxis]} />
                    </div>
                    <p className='col-10 col-md-8'>
                        In the above graph, each box is length 1, and the <i>x</i>-axis and <i>y</i>-axis are in bold.  
                        Below are selected equations for this line.
                    </p>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <h5>Equations</h5>
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
                        <SvgGraph bounds={{ xStart: -100, yStart: -100, width: 200, height: 200 }} childGraphics={[grid1, quad1, quad2, xAxis, yAxis]} />
                    </div>
                    <p className='col-10 col-md-8'>
                        Below are the equations for the two quadratic functions above.  In the <b className='text-danger'>red</b> function, <b className='text-danger'>a</b> is 1, 
                        and hence, the function opens upward.  In the <b className='text-primary'>blue</b> function, <b className='text-primary'>a</b> is -1, 
                        and hence, the function opens downward.  Below are the three equations for each function.
                    </p>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <h5>Equations</h5>
                        <div><b>Standard</b>: <i>y</i> = <i>x</i><sup>2</sup> + <b className='text-danger'>2</b><i>x</i> - <b className='text-danger'>3</b></div>
                        <div><b>Factored</b>: <i>y</i> = (<i>x</i> + <b className='text-danger'>3</b>)(<i>x</i> - <b className='text-danger'>1</b>)</div>
                        <div><b>Vertex</b>: <i>y</i> = (<i>x</i> + <b className='text-danger'>1</b>)<sup>2</sup> - <b className='text-danger'>4</b></div>
                        <div><b>Standard</b>: <i>y</i> = <b className='text-primary'>-</b><i>x</i><sup>2</sup> + <b className='text-primary'>2</b><i>x</i> + <b className='text-primary'>3</b></div>
                        <div><b>Factored</b>: <i>y</i> = <b className='text-primary'>-</b>(<i>x</i> + <b className='text-primary'>1</b>)(<i>x</i> - <b className='text-primary'>3</b>)</div>
                        <div><b>Vertex</b>: <i>y</i> = <b className='text-primary'>-</b>(<i>x</i> - <b className='text-primary'>1</b>)<sup>2</sup> + <b className='text-primary'>4</b></div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column pb-4 mb-5 border-bottom border-dark'>
                <div className='d-flex justify-content-evenly align-items-center mb-2'>
                    <h4 id="polynomials">Polynomials</h4>
                    <a href='#top' className='nav-link'>Back to Top</a>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <p className='col-10 col-md-8'>
                        Generally when we discuss polynomials, we refer to functions that are in the first 
                        power of the variable <i>y</i> and non-negative integer powers of the variable <i>x</i>.  
                        Linear functions and quadratic functions are both instances of polynomials.
                    </p>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <h5>Examples</h5>
                        <div><b>Standard</b>: <i>y</i> = <b className='text-danger'>a</b><i>x</i><sup>n</sup> + <b className='text-danger'>b</b><i>x</i><sup>n - 1</sup> + <b className='text-danger'>c</b><i>x</i><sup>n - 2</sup> + ... + <b className='text-danger'>k</b></div>
                        <div><b>Factored</b>: <i>y</i> = <b className='text-danger'>a</b>(<i>x</i> - <b className='text-danger'>z<sub>1</sub></b>)(<i>x</i> - <b className='text-danger'>z<sub>2</sub></b>)(<i>x</i> - <b className='text-danger'>z<sub>3</sub></b>)&sdot;&sdot;&sdot;(<i>x</i> - <b className='text-danger'>z<sub>n</sub></b>)</div>
                    </div>
                    <p className='col-10 col-md-8'>
                        The degree of a polynomial is the highest power of <i>x</i> that it will have when it is fully expanded, as is the case 
                        in the Standard example above.  In each of the equations above, the degree of the polynomial would be <b className='text-danger'>n</b>.  
                        In the Standard example, any of the coefficents except for <b className='text-danger'>a</b> can be zero.  In the Factored case, any of 
                        the zeroes of the function can be zero.
                    </p>
                    <div className='col-10 col-md-6 mb-5'>
                        <SvgGraph bounds={{ xStart: -18, yStart: -18, width: 36, height: 36 }} childGraphics={[grid3, poly1, poly2, xAxis_1, yAxis_1]} />
                    </div>
                    <p className='col-10 col-md-8'>
                        Below are the equations for the two polynomial functions above.  In the <b className='text-danger'>red</b> function, <b className='text-danger'>a</b> is <sup>1</sup>&frasl;<sub>4</sub>, 
                        and the function has zeroes of -4, -1, 2, and 3.  In the <b className='text-primary'>blue</b> function, <b className='text-primary'>a</b> is -<sup>1</sup>&frasl;<sub>20</sub>, 
                        and the function has zeroes of -4, -1, -1, and 5.  Since the multiplicity of the zero -1 is even in the <b className='text-primary'>blue</b> function, the function bounces off of 
                        the <i>x</i>-axis there rather than going through it.  Since both functions are even-degreed functions (both have an even number of roots), the end behavior of each individual function 
                        is identical whether going to &infin; or -&infin;.
                    </p>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <h5>Equations</h5>
                        <div><span className='text-danger'>Red Function</span>: <sup>1</sup>&frasl;<sub>4</sub>(<PolyElement coefficients={calc.getPolyCos([-4,-1,2,3])} variable={"x"} />)</div>
                        <div><span className='text-primary'>Blue Function</span>: -<sup>1</sup>&frasl;<sub>20</sub>(<PolyElement coefficients={calc.getPolyCos([-4,-1,-1,5])} variable={"x"} />)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Algebra;