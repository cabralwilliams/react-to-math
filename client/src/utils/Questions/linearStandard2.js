import React from "react";

class LinearStandard2 {
    constructor(coefs1, coefs2, coefs3, solution, ansNumber = 1) {
        this.coefs1 = coefs1;
        this.coefs2 = coefs2;
        this.coefs3 = coefs3;
        this.solution = solution;
        this.ansNumber = ansNumber;
        this.answers = [this.getAnswer()];
        this.matchCount = 1;
    }

    getExpression(aCo,bCo) {
        let newA = aCo === 1 ? "" : (aCo === -1 ? "-" : aCo);
        let newB = Math.abs(bCo) === 1 ? "" : Math.abs(bCo);
        const sign = bCo < 0 ? " - " : " + ";
        return <span>
            {newA}<i>x</i>{sign}{newB}<i>y</i>
        </span>
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
        const a3 = (this.coefs1[0]*this.coefs3[0] + this.coefs2[0]*this.coefs3[1])/this.coefs3[2];
        const b3 = (this.coefs1[1]*this.coefs3[0] + this.coefs2[1]*this.coefs3[1])/this.coefs3[2];
        let newA3 = a3 === 1 ? "" : (a3 === -1 ? "-" : a3);
        let newB3 = Math.abs(b3) === 1 ? "" : Math.abs(b3);
        const sign1 = this.coefs1[1] < 0 ? " - " : " + ";
        const sign2 = this.coefs2[1] < 0 ? " - " : " + ";
        const sign3 = b3 < 0 ? " - " : " + ";
        const eq1 = `${newA1}x${sign1}${newB1}y = ${c1}`;
        const eq2 = `${newA2}x${sign2}${newB2}y = ${c2}`;
        const exp3 = `${newA3}x${sign3}${newB3}y`;
        return [eq1,eq2,"Given the above two equations, find the value of the following.",exp3];
    }

    getAnswer() {
        const a = (this.coefs1[0]*this.coefs3[0] + this.coefs2[0]*this.coefs3[1])/this.coefs3[2];
        const b = (this.coefs1[1]*this.coefs3[0] + this.coefs2[1]*this.coefs3[1])/this.coefs3[2];
        return a*this.solution[0] + b*this.solution[1];
    }

    JSXQuestion() {
        const a = (this.coefs1[0]*this.coefs3[0] + this.coefs2[0]*this.coefs3[1])/this.coefs3[2];
        const b = (this.coefs1[1]*this.coefs3[0] + this.coefs2[1]*this.coefs3[1])/this.coefs3[2];
        return(
            <div>
                <div className="d-flex flex-column mb-3">
                    {this.getStandardForm(...this.coefs1, this.coefs1[0]*this.solution[0] + this.coefs1[1]*this.solution[1])}
                    {this.getStandardForm(...this.coefs2, this.coefs2[0]*this.solution[0] + this.coefs2[1]*this.solution[1])}
                </div>
                <p className="mb-2">Given the above two equations, find the value of the following.</p>
                {this.getExpression(a,b)}
            </div>
        )
    }

    AnswerForm() {
        return(
            <div className="d-flex flex-column col-10 col-md-8">
                <div className="form-group d-flex flex-column col-6 col-md-4 mb-2">
                    <label htmlFor={`response${this.ansNumber}`} className="mb-2">Your Response</label>
                    <input type="number" id={`response${this.ansNumber}`} name={`response${this.ansNumber}`} step={1} />
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
                    <input type="number" id={`response${this.ansNumber}`} name={`response${this.ansNumber}`} step={1} />
                </div>
                <div className="d-flex flex-column col-10 col-md-8">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </div>
        )
    }
}

export default LinearStandard2;