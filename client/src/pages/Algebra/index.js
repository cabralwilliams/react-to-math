import React from 'react';
import InfoComponent from '../../components/InfoComponent';
import SvgGraph from '../../components/SvgGraph';
import SvgGrid from '../../components/SvgGrid';
import SvgLine from '../../components/SvgLine';
import SvgQuadStand from '../../components/SvgQuadStand';
import SvgPoly from '../../components/SvgPoly';
import PolyElement from '../../components/PolyElement';
import calc from '../../utils/Calc/calc';
import RootExpression from '../../components/RootExpression';
import RationalExpression from '../../components/RationalExpression';
import RationalExpression2 from '../../components/RationalExpression2';
import RationalPath from '../../components/RationalPath';
import SvgRootLinear from '../../components/SvgRootLinear';
import FractionElement from '../../components/FractionElement';

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
    const rational1 = <RationalPath numZeroes={[-6, -3, 1, 7]} denZeroes={[-4, -3, 1, 1, 8]} leadingCos={{ num: -1, den: 2 }} bounds={{ xStart: -15, xEnd: 15, yMax: 100, yMin: -100, threshhold: 0.0005 }} lineW={0.25} lineFill={"red"} opacity={0.95} interval={0.05} />
    const rational2 = <RationalPath numZeroes={[-12, -5, -5, 7, 10]} denZeroes={[-8, -5, 7, 11]} leadingCos={{ num: 1, den: 10 }} bounds={{ xStart: -15, xEnd: 15, yMax: 100, yMin: -100, threshhold: 0.0005 }} lineW={0.25} lineFill={"blue"} opacity={0.95} interval={0.05} />
    const linearRoot1 = <SvgRootLinear rootNumber={2} coefficients={{a: -2, m: 2, b: -7}} bounds={{xStart: -15, xEnd: 15 }} interval={0.1} lineW={0.25} lineFill={"blue"} opacity={0.95} />
    const linearRoot2 = <SvgRootLinear rootNumber={3} coefficients={{a: 2, m: 1, b: 4}} bounds={{xStart: -15, xEnd: 15 }} interval={0.1} lineW={0.25} lineFill={"red"} opacity={0.95} />
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
                        <div><span className='text-danger'>Red Function</span>: <i>y</i> = <sup>1</sup>&frasl;<sub>4</sub>(<PolyElement coefficients={calc.getPolyCos([-4,-1,2,3])} variable={"x"} />)</div>
                        <div><span className='text-primary'>Blue Function</span>: <i>y</i> = -<sup>1</sup>&frasl;<sub>20</sub>(<PolyElement coefficients={calc.getPolyCos([-4,-1,-1,5])} variable={"x"} />)</div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column pb-4 mb-5 border-bottom border-dark'>
                <div className='d-flex justify-content-evenly align-items-center mb-2'>
                    <h4 id="advanced">Advanced</h4>
                    <a href='#top' className='nav-link'>Back to Top</a>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <p className='col-10 col-md-8'>
                        It is a bit subjective to determine what counts as <i>advanced</i> algebra, but here root functions and  
                        rational functions will be discussed.  Understanding these functions is important because these are the 
                        functions that typically experience domain limitations.
                    </p>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <h5>Examples</h5>
                        <div className='d-flex align-items-center mb-2'><div><b className='text-primary'>Root (No Restrictions)</b>: <i>y</i> ={' '}</div><RootExpression rootVal={4} funcArgument={<PolyElement coefficients={[1,0,4]} variable={"x"} />} /></div>
                        <div className='d-flex align-items-center mb-2'><div><b className='text-danger'>Root (With Restrictions)</b>: <i>y</i> ={' '}</div><RootExpression rootVal={2} funcArgument={<PolyElement coefficients={[2,4]} variable={"x"} />} /></div>
                        <div className='d-flex align-items-center mb-2'><div><b className='text-primary'>Rational (No Restrictions)</b>: <i>y</i> ={' '}</div><RationalExpression numerator={<PolyElement coefficients={[1,2,3,4]} variable={"x"} />} denominator={<PolyElement coefficients={[-3,0,-17]} variable={"x"} />} /></div>
                        <div className='d-flex align-items-center mb-2'><div><b className='text-danger'>Rational (With Restrictions)</b>: <i>y</i> ={' '}</div><RationalExpression2 numerator={<PolyElement coefficients={[2,3]} variable={"x"} />} denominator={<PolyElement coefficients={[2,-6,4]} variable={"x"} />} /></div>
                    </div>
                    <p className='col-10 col-md-8'>
                        The <b className='text-primary'>Root (No Restrictions)</b> example has no restrictions on its domain as the argument of the root, <PolyElement coefficients={[1,0,4]} variable={"x"} />, will
                        never be negative. The <b className='text-danger'>Root (With Restrictions)</b> example has domain restrictions because the argument of an even root cannot be negative.  Since 
                        the argument of this root, <PolyElement coefficients={[2,4]} variable={"x"} />, will be negative for any <i>x</i> &lt; 2, the domain of the function is restricted.  In 
                        the <b className='text-primary'>Rational (No Restrictions)</b> example, the function has no restrictions because the denominator, <PolyElement coefficients={[-3,0,-17]} variable={"x"} />, can 
                        never go to zero.  Finally, the <b className='text-danger'>Rational (With Restrictions)</b> example has domain restrictions because both the <i>x</i> values 1 and 2 will set its demonitor 
                        expression, <PolyElement coefficients={[2,-6,4]} variable={"x"} />, equal to zero.
                    </p>
                    <div className='col-10 col-md-6 mb-5'>
                        <SvgGraph bounds={{ xStart: -18, yStart: -18, width: 36, height: 36 }} childGraphics={[grid3, xAxis_1, yAxis_1, linearRoot1, linearRoot2 ]} />
                    </div>
                    <p className='col-10 col-md-8'>
                        Below are the equations for the two root functions above.  In the <b className='text-danger'>red</b> function, we have a 3<sup>rd</sup> root function, 
                        and in the <b className='text-primary'>blue</b> function, we have a square root (2<sup>nd</sup> root) function.
                    </p>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <h5>Equations</h5>
                        <div><span className='text-danger'>Red Function</span>: <i>y</i> = 2<RootExpression rootVal={3} funcArgument={<PolyElement coefficients={[1,4]} variable={"x"} />} /></div>
                        <div><span className='text-primary'>Blue Function</span>: <i>y</i> = -2<RootExpression rootVal={2} funcArgument={<PolyElement coefficients={[2,-7]} variable={"x"} />} /></div>
                    </div>
                    <div className='col-10 col-md-6 mb-5'>
                        <SvgGraph bounds={{ xStart: -18, yStart: -18, width: 36, height: 36 }} childGraphics={[grid3, xAxis_1, yAxis_1, rational1, rational2 ]} />
                    </div>
                    <p className='col-10 col-md-8'>
                        Below are the equations for the two rational functions in the above graph.  In the <b className='text-danger'>red</b> function, 
                        vertical asymptotes are present at <i>x</i> = -4, 1, and 8.  There is also a hole (removable discontinuity) at <i>x</i> = -3.  
                        Lastly, there is a horizontal asymptote for this function at <i>y</i> = 0.  The <b className='text-primary'>blue</b> function 
                        has vertical asymptotes at <i>x</i> = -8 and 11.  It has two removable discontinuities, at <i>x</i> = -5 and 7.  This function 
                        does not have a horizontal asymptote as the degree of its numerator exceeds the degree of its denominator.  Since the degree of 
                        the numerator exceeds that of the denominator by 1, this function has an oblique, or slant, asymptote.
                    </p>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <h5>Equations</h5>
                        <div className='d-flex align-items-center mb-2'><div><b className='text-primary'>Blue function</b>: <i>y</i> ={' '}</div><RationalExpression numerator={<PolyElement coefficients={calc.getPolyCos([-12, -5, -5, 7, 10])} variable={"x"} />} denominator={<PolyElement coefficients={calc.getPolyCos([-8, -5, 7, 11]).map(val => val*10)} variable={"x"} />} /></div>
                        <div className='d-flex align-items-center mb-2'><div><b className='text-danger'>Red function</b>: <i>y</i> ={' '}</div><RationalExpression2 numerator={<PolyElement coefficients={calc.getPolyCos([-6, -3, 1, 7]).map(val => -val)} variable={"x"} />} denominator={<PolyElement coefficients={calc.getPolyCos([-4, -3, 1, 1, 8]).map(val => val*2)} variable={"x"} />} /></div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column pb-4 mb-5 border-bottom border-dark'>
                <div className='d-flex justify-content-evenly align-items-center mb-2'>
                    <h4 id="methods">Methods</h4>
                    <a href='#top' className='nav-link'>Back to Top</a>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <p className='col-10 col-md-8'>
                        There are many algebraic methods that if mastered will help you to solve a great many 
                        algebra questions quite easily and efficiently.  Some of those methods and descriptions 
                        of the methods are listed below.
                    </p>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='d-flex justify-content-between align-items-center mb-2 col-8 col-md-6'>
                        <h5 id='linear_elimination'>Linear Elimination</h5>
                        <a href='#top' className='nav-link'>Back to Top</a>
                    </div>
                    <p className='col-10 col-md-8'>
                        Linear elimination is a process by which you solve a linear system that is presented in 
                        standard form by adding/subtracting multiples of the lines until one of the variables 
                        is <i>eliminated</i> from the equation.  The value of the remaining variable can be readily 
                        found; this value can then be substituted into either of the original equations to find 
                        the value of the eliminated variable.  As with any linear system method, this method 
                        will not work if the two lines are parallel or identical.
                    </p>
                    <h6 className='mb-3'>Examples</h6>
                    <div className='d-flex flex-column col-10 col-md-8 mb-3 border-dark border-bottom'>
                        <div className='d-flex'>
                            <div className='d-flex flex-column mb-3 col-6'>
                                <b className='text-primary'>0. Eliminate <i>x</i> - Initial Equations</b>
                                <div><PolyElement coefficients={[3,0]} variable={'x'} /> + <PolyElement coefficients={[4,0]} variable={'y'} /> = 8</div>
                                <div><PolyElement coefficients={[2,0]} variable={'x'} /> - <PolyElement coefficients={[5,0]} variable={'y'} /> = -33</div>
                            </div>
                            <div className='d-flex flex-column mb-3 col-6'>
                                <b className='text-primary'>1. Multiply Eq. 1 by 2, Eq. 2 by -3</b>
                                <div><PolyElement coefficients={[6,0]} variable={'x'} /> + <PolyElement coefficients={[8,0]} variable={'y'} /> = 16</div>
                                <div><PolyElement coefficients={[-6,0]} variable={'x'} /> + <PolyElement coefficients={[15,0]} variable={'y'} /> = 99</div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex flex-column mb-3 col-6'>
                                <b className='text-primary'>2. Add Equations</b>
                                <div>0&sdot;<i>x</i> + <PolyElement coefficients={[23,0]} variable={'y'} /> = 115</div>
                            </div>
                            <div className='d-flex flex-column mb-3 col-6'>
                                <b className='text-primary'>3. Solve for <i>y</i></b>
                                <div><i>y</i> = 5</div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex flex-column col-6'>
                                <div className='d-flex flex-column mb-3'>
                                    <b className='text-primary'>4. Substitute to find <i>x</i></b>
                                    <div><PolyElement coefficients={[3,0]} variable={'x'} /> + 20 = 8</div>
                                    <div><PolyElement coefficients={[2,0]} variable={'x'} /> - 25 = -33</div>
                                </div>
                                <div className='d-flex flex-column mb-3'>
                                    <div><PolyElement coefficients={[3,0]} variable={'x'} /> = -12</div>
                                    <div><PolyElement coefficients={[2,0]} variable={'x'} /> = -8</div>
                                </div>
                                <div className='d-flex flex-column mb-3'>
                                    <div><i>x</i> = -4</div>
                                    <div><i>x</i> = -4</div>
                                </div>
                            </div>
                            <div className='d-flex flex-column mb-3 col-6'>
                                <b className='text-primary'>5. Solution</b>
                                <div>(-4, 5)</div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            
                        </div>
                    </div>
                    <div className='d-flex flex-column col-10 col-md-8 mb-3 border-dark border-bottom'>
                        <div className='d-flex'>
                            <div className='d-flex flex-column mb-3 col-6'>
                                <b className='text-primary'>0. Eliminate <i>y</i> - Initial Equations</b>
                                <div><PolyElement coefficients={[4,0]} variable={'x'} /> - <PolyElement coefficients={[3,0]} variable={'y'} /> = -2</div>
                                <div><PolyElement coefficients={[-3,0]} variable={'x'} /> + <PolyElement coefficients={[1,0]} variable={'y'} /> = -1</div>
                            </div>
                            <div className='d-flex flex-column mb-3 col-6'>
                                <b className='text-primary'>1. Multiply Eq. 2 by 3</b>
                                <div><PolyElement coefficients={[4,0]} variable={'x'} /> - <PolyElement coefficients={[3,0]} variable={'y'} /> = -2</div>
                                <div><PolyElement coefficients={[-9,0]} variable={'x'} /> + <PolyElement coefficients={[3,0]} variable={'y'} /> = -3</div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex flex-column mb-3 col-6'>
                                <b className='text-primary'>2. Add Equations</b>
                                <div><PolyElement coefficients={[-5,0]} variable={'x'} /> + 0&sdot;<i>y</i> = -5</div>
                            </div>
                            <div className='d-flex flex-column mb-3 col-6'>
                                <b className='text-primary'>3. Solve for <i>x</i></b>
                                <div><i>x</i> = 1</div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='d-flex flex-column col-6'>
                                <div className='d-flex flex-column mb-3'>
                                    <b className='text-primary'>4. Substitute to find <i>y</i></b>
                                    <div>4 - <PolyElement coefficients={[3,0]} variable={'y'} /> = -2</div>
                                    <div>-3 + <PolyElement coefficients={[1,0]} variable={'y'} /> = -1</div>
                                </div>
                                <div className='d-flex flex-column mb-3'>
                                    <div>-<PolyElement coefficients={[3,0]} variable={'y'} /> = -6</div>
                                    <div><PolyElement coefficients={[1,0]} variable={'y'} /> = 2</div>
                                </div>
                                <div className='d-flex flex-column mb-3'>
                                    <div><i>y</i> = 2</div>
                                    <div><i>y</i> = 2</div>
                                </div>
                            </div>
                            <div className='d-flex flex-column mb-3 col-6'>
                                <b className='text-primary'>5. Solution</b>
                                <div>(1, 2)</div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                            
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='d-flex justify-content-between align-items-center mb-2 col-8 col-md-6'>
                        <h5 id='quadratic_formula'>Quadratic Formula</h5>
                        <a href='#top' className='nav-link'>Back to Top</a>
                    </div>
                    <p className='col-10 col-md-8'>
                        The quadratic formula is a method that can be used to find the roots/zeroes of a quadratic 
                        function when the function is given in standard form (<i>y</i> = <b className='text-danger'>a</b><PolyElement coefficients={[1,0,0]} variable={'x'} /> + <b className='text-danger'>b</b><PolyElement coefficients={[1,0]} variable={'x'} /> + <b className='text-danger'>c</b>).  
                        Below is the the quadratic formula.
                    </p>
                    <div className='d-flex align-items-center justify-content-center mb-3'>
                        <div><i>x</i> = {' '}</div>
                        <FractionElement numeratorEl={<div>-<b className='text-danger'>b</b>&plusmn;<RootExpression rootVal={2} funcArgument={<span><b className='text-danger'>b</b><sup>2</sup> - 4<b className='text-danger'>ac</b></span>}  /></div>} denominatorEl={<span>2<b className='text-danger'>a</b></span>} longerNumerator={true} />
                    </div>
                    <h6 className='mb-3'>Examples</h6>
                    <div className='d-flex flex-column col-10 col-md-8 mb-3 border-dark border-bottom'>
                        <div className='mb-3'>If the discriminant (<b className='text-danger'>b</b><sup>2</sup> - 4<b className='text-danger'>ac</b>) is greater than zero, the function has two unique real roots.</div>
                        <div className='d-flex justify-content-center mb-3'>
                            <PolyElement coefficients={[2,6,4]} variable={'x'} /> = 0
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = {' '}</div>
                            <FractionElement numeratorEl={<div>-(<b className='text-danger'>6</b>)&plusmn;<RootExpression rootVal={2} funcArgument={<span><b className='text-danger'>6</b><sup>2</sup> - 4(<b className='text-danger'>2</b>)(<b className='text-danger'>4</b>)</span>}  /></div>} denominatorEl={<span>2(<b className='text-danger'>2</b>)</span>} longerNumerator={true} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = {' '}</div>
                            <FractionElement numeratorEl={<div>-6 &plusmn;<RootExpression rootVal={2} funcArgument={<span><b className='text-danger'>36</b> - <b className='text-danger'>32</b></span>}  /></div>} denominatorEl={<span>4</span>} longerNumerator={true} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = {' '}</div>
                            <FractionElement numeratorEl={<div>-6 &plusmn;<RootExpression rootVal={2} funcArgument={<span><b className='text-danger'>4</b></span>}  /></div>} denominatorEl={<span>4</span>} longerNumerator={true} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = {' '}</div>
                            <FractionElement numeratorEl={<div>-6 &plusmn;<b className='text-danger'>2</b></div>} denominatorEl={<span>4</span>} longerNumerator={true} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = -2, -1</div>
                        </div>
                    </div>
                    <div className='d-flex flex-column col-10 col-md-8 mb-3 border-dark border-bottom'>
                        <div className='mb-3'>If the discriminant (<b className='text-danger'>b</b><sup>2</sup> - 4<b className='text-danger'>ac</b>) is zero, the function has one unique real root, a double root.</div>
                        <div className='d-flex justify-content-center mb-3'>
                            <PolyElement coefficients={[1,-8,16]} variable={'x'} /> = 0
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = {' '}</div>
                            <FractionElement numeratorEl={<div>-(<b className='text-danger'>-8</b>)&plusmn;<RootExpression rootVal={2} funcArgument={<span>(<b className='text-danger'>-8</b>)<sup>2</sup> - 4(<b className='text-danger'>1</b>)(<b className='text-danger'>16</b>)</span>}  /></div>} denominatorEl={<span>2(<b className='text-danger'>1</b>)</span>} longerNumerator={true} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = {' '}</div>
                            <FractionElement numeratorEl={<div>8 &plusmn;<RootExpression rootVal={2} funcArgument={<span><b className='text-danger'>64</b> - <b className='text-danger'>64</b></span>}  /></div>} denominatorEl={<span>2</span>} longerNumerator={true} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = {' '}</div>
                            <FractionElement numeratorEl={<div>8 &plusmn;<RootExpression rootVal={2} funcArgument={<span><b className='text-danger'>0</b></span>}  /></div>} denominatorEl={<span>2</span>} longerNumerator={true} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = {' '}</div>
                            <FractionElement numeratorEl={<div>8 &plusmn;<b className='text-danger'>0</b></div>} denominatorEl={<span>2</span>} longerNumerator={true} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = 4, 4</div>
                        </div>
                    </div>
                    <div className='d-flex flex-column col-10 col-md-8 mb-3 border-dark border-bottom'>
                        <div className='mb-3'>If the discriminant (<b className='text-danger'>b</b><sup>2</sup> - 4<b className='text-danger'>ac</b>) is less than zero, the function has two complex (imaginary) roots, which are complex conjugates.</div>
                        <div className='d-flex justify-content-center mb-3'>
                            <PolyElement coefficients={[2,2,1]} variable={'x'} /> = 0
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = {' '}</div>
                            <FractionElement numeratorEl={<div>-(<b className='text-danger'>2</b>)&plusmn;<RootExpression rootVal={2} funcArgument={<span><b className='text-danger'>2</b><sup>2</sup> - 4(<b className='text-danger'>2</b>)(<b className='text-danger'>1</b>)</span>}  /></div>} denominatorEl={<span>2(<b className='text-danger'>2</b>)</span>} longerNumerator={true} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = {' '}</div>
                            <FractionElement numeratorEl={<div>-2 &plusmn;<RootExpression rootVal={2} funcArgument={<span><b className='text-danger'>4</b> - <b className='text-danger'>8</b></span>}  /></div>} denominatorEl={<span>4</span>} longerNumerator={true} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = {' '}</div>
                            <FractionElement numeratorEl={<div>-2 &plusmn;<RootExpression rootVal={2} funcArgument={<span><b className='text-danger'>-4</b></span>}  /></div>} denominatorEl={<span>4</span>} longerNumerator={true} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = {' '}</div>
                            <FractionElement numeratorEl={<div>-2 &plusmn;<b className='text-danger'>2<i>i</i></b></div>} denominatorEl={<span>4</span>} longerNumerator={true} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div><i>x</i> = </div>
                            <FractionElement numeratorEl={<span>-1</span>}  denominatorEl={<span>2</span>} longerNumerator={true} />
                            <div>&plusmn;</div>
                            <FractionElement numeratorEl={<span><i>i</i></span>}  denominatorEl={<span>2</span>} longerNumerator={false} />
                        </div>
                    </div>
                    <h6>Additional Properties</h6>              
                    <div className='d-flex flex-column col-10 col-md-8 mb-3 border-dark border-bottom'>
                        <ul>
                            <li>
                                If <b className='text-danger'>a</b> and <b className='text-danger'>c</b> have different signs, the function will have two unique real roots, one negative and one positive.  
                                (This condition guarantees that the discriminant will be positive.)
                            </li>
                            <li>
                                <div className='d-flex align-items-center'>
                                    -<FractionElement numeratorEl={<b className='text-danger'>b</b>} denominatorEl={<b className='text-danger'>a</b>}  longerNumerator={true} /><span>&nbsp;is always the sum of the two roots of the function.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Algebra;