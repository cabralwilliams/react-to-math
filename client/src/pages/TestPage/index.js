import React from 'react';
import MQ from '../../utils/Questions';

function TestPage() {
    const ls1 = new MQ.LinearStandard1([2,5],[3,-2],[1,2],1);
    const ls2 = new MQ.LinearStandard2([3,-7],[-1,5],[1,1,2],[3,-4],2);

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
            alert(`Your response of ${response} was correct!`);
        } else {
            alert(`Your response of ${response} was incorrect.\nAcceptable answers are ${ls1.answers[0]} and ${ls1.answers[1]}.`);
        }
        document.querySelector("#response1").value = "";
    }

    const handleSubmit2 = event => {
        event.preventDefault();
        const response = parseInt(document.querySelector("#response2").value);
        let matchFound = response === ls2.answers[0];
        if(matchFound) {
            alert(`Your response of ${response} was correct!`);
        } else {
            alert(`Your response of ${response} was incorrect.\nThe correct answer is ${ls2.answers[0]}.`);
        }
        document.querySelector("#response2").value = 0;
    }
    return (
        <div className='pb-4 mb-4'>
            <form className='d-flex flex-column' onSubmit={handleSubmit1}>
                {ls1.JSXQuestion()}
                {ls1.AnswerForm()}
            </form>
            <form className='d-flex flex-column' onSubmit={handleSubmit2}>
                {ls2.JSXQuestion()}
                {ls2.AnswerForm()}
            </form>
        </div>
    )
}

export default TestPage;