import React from "react";

class LinearStandard1 {
    constructor(coefs1, coefs2, solution, ansNumber = 1) {
        this.coefs1 = coefs1;
        this.coefs2 = coefs2;
        this.solution = solution;
        this.ansNumber = ansNumber;
        this.answers = [`(${this.solution[0]},${this.solution[1]})`,`${this.solution[0]},${this.solution[1]}`];
        this.matchCount = 1;
    }

    getStandardForm(aCo,bCo,cCo) {
        let newA = aCo === 1 ? "" : (aCo === -1 ? "-" : aCo);
        let newB = Math.abs(bCo) === 1 ? "" : Math.abs(bCo);
        const sign = bCo < 0 ? " - " : " + ";
        return <div>
            {newA}<i>x</i>{sign}{newB}<i>y</i> = {cCo}
        </div>
    }

    getQuestionStrings() {
        let newA1 = this.coefs1[0] === 1 ? "" : (this.coefs1[0] === -1 ? "-" : this.coefs1[0]);
        let newB1 = Math.abs(this.coefs1[1]) === 1 ? "" : Math.abs(this.coefs1[1]);
        const c1 = this.coefs1[0]*this.solution[0] + this.coefs1[1]*this.solution[1];
        let newA2 = this.coefs2[0] === 1 ? "" : (this.coefs2[0] === -1 ? "-" : this.coefs2[0]);
        let newB2 = Math.abs(this.coefs2[1]) === 1 ? "" : Math.abs(this.coefs2[1]);
        const c2 = this.coefs2[0]*this.solution[0] + this.coefs2[1]*this.solution[1];
        const sign1 = this.coefs1[1] < 0 ? " - " : " + ";
        const sign2 = this.coefs2[1] < 0 ? " - " : " + ";
        const eq1 = `${newA1}x${sign1}${newB1}y = ${c1}`;
        const eq2 = `${newA2}x${sign2}${newB2}y = ${c2}`;
        return [eq1,eq2,"What is the solution, (x, y), to the system above?"];
    }

    JSXQuestion() {
        return(
            <div>
                <div className="d-flex flex-column mb-3">
                    {this.getStandardForm(...this.coefs1, this.coefs1[0]*this.solution[0] + this.coefs1[1]*this.solution[1])}
                    {this.getStandardForm(...this.coefs2, this.coefs2[0]*this.solution[0] + this.coefs2[1]*this.solution[1])}
                </div>
                <p>What is the solution, (<i>x</i>, <i>y</i>), to the system above?</p>
            </div>
        )
    }

    AnswerForm() {
        return(
            <div className="d-flex flex-column col-10 col-md-8">
                <div className="form-group d-flex flex-column col-6 col-md-4 mb-2">
                    <label htmlFor={`response${this.ansNumber}`} className="mb-2">Your Response</label>
                    <input type="text" id={`response${this.ansNumber}`} name={`response${this.ansNumber}`} />
                </div>
                <div className="d-flex flex-column col-6 col-md-4">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </div>
        )
    }

    AnswerFormSmall() {
        return(
            <div className="d-flex flex-column col-10 col-md-8">
                <div className="form-group d-flex flex-column col-10 col-md-8 mb-2">
                    <label htmlFor={`response${this.ansNumber}`} className="mb-2">Your Response</label>
                    <input type="text" id={`response${this.ansNumber}`} name={`response${this.ansNumber}`} />
                </div>
                <div className="d-flex flex-column col-10 col-md-8">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </div>
        )
    }
}

export default LinearStandard1;