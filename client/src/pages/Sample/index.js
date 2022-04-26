import React, { useState, useEffect } from 'react';
import MQ from '../../utils/Questions';
import InfoComponent from '../../components/InfoComponent';
import calc from '../../utils/Calc/calc';

function Sample() {
    //Function creates intersecting line
    const selectStandardCos = () => {
        let a1 = calc.reselectIfZero(12);
        let a2 = calc.reselectIfZero(12);
        let b1 = calc.reselectIfZero(12);
        let b2 = calc.reselectIfZero(12);
        while(calc.areParallel([a1,b1],[a2,b2])) {
            a1 = calc.reselectIfZero(12);
            a2 = calc.reselectIfZero(12);
            b1 = calc.reselectIfZero(12);
            b2 = calc.reselectIfZero(12);
        }
        return [[a1,b1],[a2,b2]];
    }

    //Select coefficients for LinearStandard2
    const selectLinearComboCos = () => {
        let a1 = calc.reselectIfZero(12);
        let a2 = calc.reselectIfZero(12);
        let b1 = calc.reselectIfZero(12);
        let b2 = calc.reselectIfZero(12);
        const multiples = [calc.reselectIfZero(3),calc.reselectIfZero(3), 1];
        while(calc.areParallel([a1,b1],[a2,b2]) || multiples[0]*a1 + multiples[1]*a2 === 0 || multiples[0]*b1 + multiples[1]*b2 === 0) {
            a1 = calc.reselectIfZero(12);
            a2 = calc.reselectIfZero(12);
            b1 = calc.reselectIfZero(12);
            b2 = calc.reselectIfZero(12);
        }
        
        const solutionPts = [calc.reselectIfZero(6),calc.reselectIfZero(6)];
        let combinedA = multiples[0]*a1 + multiples[1]*a2;
        let combinedB = multiples[0]*b1 + multiples[1]*b2;
        let reducedCos = calc.reducedCoefficients([combinedA,combinedB]);
        multiples[2] = combinedA/reducedCos[0];
        return [[a1,b1],[a2,b2],multiples,solutionPts];
    }
    //Select inputs for LinearStandard3
    const getParallelInputs = () => {
        const coefs = calc.reducedCoefficients([calc.reselectIfZero(12),calc.reselectIfZero(12)]);
        const multiple = calc.reselectIfZero(4);
        const replaceNo = Math.floor(Math.random()*6);
        const referencePt = [calc.reselectIfZero(8),calc.reselectIfZero(8)];
        return [coefs,multiple,replaceNo,referencePt];
    }

    //Function creates solution point
    const solutionPoint = (inputVal = 7) => {
        return [calc.reselectIfZero(inputVal),calc.reselectIfZero(inputVal)];
    }

    //Set initial states of the problems
    //LinearStandard1
    const [ls1Coef,setLs1Coef] = useState(selectStandardCos());
    const [ls1,setLs1] = useState(new MQ.LinearStandard1(ls1Coef[0],ls1Coef[1],solutionPoint(),1));
    const [lsElements,setLsElements] = useState({ question: ls1.JSXQuestion(), answerBox: ls1.AnswerFormSmall()});

    //LinearStandard2
    const [ls2,setLs2] = useState(new MQ.LinearStandard2(...selectLinearComboCos(),2));
    const [lsElements2,setLsElements2] = useState({ question: ls2.JSXQuestion(), answerBox: ls2.AnswerFormSmall()});

    //LinearStandard3
    const [ls3, setLs3] = useState(new MQ.LinearStandard3(...getParallelInputs(),3));
    const [lsElements3,setLsElements3] = useState({ question: ls3.JSXQuestion(), answerBox: ls3.AnswerFormSmall()});

    //subnavigation links for the page
    const defaultLinks = [
        {
            linkPath: "algebra",
            linkName: "Algebra"
        },
        {
            linkPath: "geometry",
            linkName: "Geometry"
        },
        {
            linkPath: "statistics",
            linkName: "Statistics"
        }
    ];
    //page description
    const description = `Below are a number of sample questions from the various topics.  You can use the links above to quickly jump to desired section.`;

    //Reset LinearStandard1
    useEffect(() => {
        const question = ls1.JSXQuestion();
        const answerBox = ls1.AnswerFormSmall();
        setLsElements({question, answerBox});
    }, [ls1]);

    //LinearStandard1 button controls
    const handleSubmit1 = event => {
        event.preventDefault();
        const response = document.querySelector("#response1").value.split(' ').join('').trim();
        let matchFound = false;
        for(let i = 0; i < ls1.answers.length; i++) {
            if(response === ls1.answers[i]) {
                matchFound = true;
                break;
            }
        }
        if(matchFound) {
            document.querySelector("#info1").textContent = `Your response of ${response} was correct!`;
        } else {
            document.querySelector("#info1").textContent = `Your response of ${response} was incorrect.\nAcceptable answers are ${ls1.answers[0]} and ${ls1.answers[1]}.`;
        }
        document.querySelector("#response1").value = "";
    }
    const reset1 = () => {
        const newls1Coef = selectStandardCos();
        const newls1 = new MQ.LinearStandard1(newls1Coef[0],newls1Coef[1],solutionPoint(),1);
        setLs1Coef(newls1Coef);
        setLs1(newls1);
        document.querySelector("#info1").textContent = "";
    }

    //Reset LinearStandard2
    useEffect(() => {
        const question = ls2.JSXQuestion();
        const answerBox = ls2.AnswerFormSmall();
        setLsElements2({question, answerBox});
    },[ls2]);

    //LinearSystem2 control functions
    const handleSubmit2 = event => {
        event.preventDefault();
        const response = parseInt(document.querySelector("#response2").value);
        let matchFound = ls2.answers[0] === response;
        if(matchFound) {
            document.querySelector("#info2").textContent = `Your response of ${response} was correct!`;
        } else {
            document.querySelector("#info2").textContent = `Your response of ${response} was incorrect.\nThe correct answer is ${ls2.answers[0]}.`;
        }
        document.querySelector("#response2").value = 0;
    }
    const reset2 = () => {
        const newls2 = new MQ.LinearStandard2(...selectLinearComboCos(),2);
        setLs2(newls2);
        document.querySelector("#info2").textContent = "";
    }

    //Reset LinearStandard3
    useEffect(() => {
        const question = ls3.JSXQuestion();
        const answerBox = ls3.AnswerFormSmall();
        setLsElements3({question, answerBox});
    },[ls3]);

    //LinearSystem2 control functions
    const handleSubmit3 = event => {
        event.preventDefault();
        const response = parseInt(document.querySelector("#response3").value);
        let matchFound = ls3.answers[0] === response;
        if(matchFound) {
            document.querySelector("#info3").textContent = `Your response of ${response} was correct!`;
        } else {
            document.querySelector("#info3").textContent = `Your response of ${response} was incorrect.\nThe correct answer is ${ls3.answers[0]}.`;
        }
        document.querySelector("#response3").value = 0;
    }
    const reset3 = () => {
        const newls3 = new MQ.LinearStandard3(...getParallelInputs(),3);
        setLs3(newls3);
        document.querySelector("#info3").textContent = "";
    }

    return (
        <div className='d-flex flex-column'>
            <InfoComponent title={"Sample Questions"} description={description} sublinks={defaultLinks} />
            <div className='d-flex flex-column pb-4 mb-5 border-bottom border-dark'>
                <div className='d-flex justify-content-evenly align-items-center mb-2'>
                    <h4 id="algebra">Algebra</h4>
                    <a href='#top' className='nav-link'>Back to Top</a>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h5 className='mb-3'>Linear Systems - Standard Form</h5>
                    <div className='d-flex flex-column pb-3 mb-3'>
                        {/* LinearStandard1 */}
                        <div className='d-flex justify-content-between border-bottom border-dark mb-3'>
                            <form className='d-flex flex-column col-5 mb-2' onSubmit={handleSubmit1} id='form1'>
                                {lsElements.question}
                                {lsElements.answerBox}
                            </form>
                            <div className='d-flex flex-column col-5 mb-2'>
                                <div className='mb-3'>
                                    <button className='btn btn-danger' onClick={reset1}>Reset Problem</button>
                                </div>
                                <div className='d-flex flex-column mb-3'>
                                    <b className='text-primary mb-2'>Click Submit for Answer</b>
                                    <div className='text-dark mb-2' id='info1'></div>
                                    <a className='text-primary' href='./algebra' target="_blank">Linear Systems (Head to Methods)</a>
                                </div>
                            </div>
                        </div>
                        {/* LinearStandard2 */}
                        <div className='d-flex justify-content-between border-bottom border-dark mb-3'>
                            <form className='d-flex flex-column col-5 mb-2' onSubmit={handleSubmit2} id='form2'>
                                {lsElements2.question}
                                {lsElements2.answerBox}
                            </form>
                            <div className='d-flex flex-column col-5 mb-2'>
                                <div className='mb-3'>
                                    <button className='btn btn-danger' onClick={reset2}>Reset Problem</button>
                                </div>
                                <div className='d-flex flex-column mb-3'>
                                    <b className='text-primary mb-2'>Click Submit for Answer</b>
                                    <div className='text-dark mb-2' id='info2'></div>
                                    <a className='text-primary' href='./algebra' target="_blank">Linear Systems (Head to Methods)</a>
                                </div>
                            </div>
                        </div>
                        {/* LinearStandard3 */}
                        <div className='d-flex justify-content-between border-bottom border-dark mb-3'>
                            <form className='d-flex flex-column col-5 mb-2' onSubmit={handleSubmit3} id='form2'>
                                {lsElements3.question}
                                {lsElements3.answerBox}
                            </form>
                            <div className='d-flex flex-column col-5 mb-2'>
                                <div className='mb-3'>
                                    <button className='btn btn-danger' onClick={reset3}>Reset Problem</button>
                                </div>
                                <div className='d-flex flex-column mb-3'>
                                    <b className='text-primary mb-2'>Click Submit for Answer</b>
                                    <div className='text-dark mb-2' id='info3'></div>
                                    <a className='text-primary' href='./algebra' target="_blank">Linear Systems (Head to Methods)</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sample;