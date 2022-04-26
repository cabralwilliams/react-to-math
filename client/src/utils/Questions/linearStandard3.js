import React from "react";
import calc from "../Calc/calc";

//Parallel lines
class LinearStandard3 {
    constructor(coefs, multiple, replaceNo, referencePt, ansNumber = 1) {
        //Coefficients for the first line
        this.coefs = coefs;
        //Multiple relating the slope coefficients between the lines
        this.multiple = multiple;
        //Which coefficient to replace
        this.replaceNo = replaceNo;
        //The reference point used to set the C coefficient of the first line
        this.referencePt = referencePt;
        this.ansNumber = ansNumber;
        this.coefs2 = [this.multiple*this.coefs[0],this.multiple*this.coefs[1]];
        this.replaceCo = this.getReplaceCo();
        this.secondC = this.getSecondC();
        this.answers = [this.determineAnswer()];
        this.matchCount = 1;
    }

    getReplaceCo() {
        if(this.replaceNo%3 === 0) {
            return "A";
        }
        if(this.replaceNo%3 === 1) {
            return "B";
        }
        return "C";
    }

    getStandardFormJSX(aCo,bCo,cCo) {
        let newA, newB, sign;
        if(isNaN(aCo)) {
            newA = aCo;
        } else if(aCo === 1) {
            newA = "";
        } else if(aCo === -1) {
            newA = "-";
        } else {
            newA = aCo;
        }

        if(isNaN(bCo)) {
            newB = bCo;
            sign = " + ";
        } else if(bCo === 1) {
            newB = "";
            sign = " + ";
        } else if(bCo === -1) {
            newB = "";
            sign = " - ";
        } else if(bCo < 0) {
            newB = -bCo;
            sign = " - ";
        } else {
            newB = bCo;
            sign = " + ";
        }


        return <div>
            {newA}<i>x</i>{sign}{newB}<i>y</i> = {cCo}
        </div>
    }

    getStandardFormString(aCo, bCo, cCo) {
        let newA, newB, sign;
        if(isNaN(aCo)) {
            newA = aCo;
        } else if(aCo === 1) {
            newA = "";
        } else if(aCo === -1) {
            newA = "-";
        } else {
            newA = aCo;
        }

        if(isNaN(bCo)) {
            newB = bCo;
            sign = " + ";
        } else if(bCo === 1) {
            newB = "";
            sign = " + ";
        } else if(bCo === -1) {
            newB = "";
            sign = " - ";
        } else if(bCo < 0) {
            newB = -bCo;
            sign = " - ";
        } else {
            newB = bCo;
            sign = " + ";
        }

        return `${newA}x${sign}${newB}y = ${cCo}`;
    }

    determineAnswer() {
        switch(this.replaceNo) {
            case 0:
                return this.coefs[0];
            case 1:
                return this.coefs[1];
            case 3:
                return this.coefs2[0];
            case 4:
                return this.coefs2[1];
            default:
                return this.multiple*(this.coefs[0]*this.referencePt[0] + this.coefs[1]*this.referencePt[1]);
        }
    }

    getSecondC() {
        return this.multiple*(this.coefs[0]*this.referencePt[0] + this.coefs[1]*this.referencePt[1]) + calc.reselectIfZero(4);
    }

    getQuestionStrings() {
        let eq1, eq2;
        const cCo1 = this.coefs[0]*this.referencePt[0] + this.coefs[1]*this.referencePt[1];
        let question = `Given that the above system has no solution, identify the value of ${this.replaceCo}.`;
        if(this.replaceNo === 0) {
            eq1 = this.getStandardFormString(this.replaceCo,this.coefs[1],cCo1);
            eq2 = this.getStandardFormString(this.coefs2[0],this.coefs2[1],this.secondC);
        } else if(this.replaceNo === 1) {
            eq1 = this.getStandardFormString(this.coefs[0],this.replaceCo,cCo1);
            eq2 = this.getStandardFormString(this.coefs2[0],this.coefs2[1],this.secondC);
        } else if(this.replaceNo === 3) {
            eq1 = this.getStandardFormString(this.coefs[0],this.coefs[1],cCo1);
            eq2 = this.getStandardFormString(this.replaceCo,this.coefs2[1],this.secondC);
        } else if(this.replaceCo === 4) {
            eq1 = this.getStandardFormString(this.coefs[0],this.coefs[1],cCo1);
            eq2 = this.getStandardFormString(this.coefs2[0],this.replaceCo,this.secondC);
        } else {
            eq1 = this.getStandardFormString(this.coefs[0],this.coefs[1],cCo1);
            eq2 = this.getStandardFormString(this.coefs2[0],this.coefs2[1],this.replaceCo);
            question = `Given that the above system has no solution, identify the value that ${this.replaceCo} CANNOT be.`;
        }
        return [eq1,eq2,question];
    }

    JSXQuestion() {
        const cos1 = [...this.coefs, this.coefs[0]*this.referencePt[0] + this.coefs[1]*this.referencePt[1]];
        const cos2 = [...this.coefs2, this.secondC];
        let question = `Given that the above system has no solution, identify the value of ${this.replaceCo}.`;
        if(this.replaceNo === 0) {
            cos1[0] = "A";
        } else if(this.replaceNo === 1) {
            cos1[1] = "B";
        } else if(this.replaceNo === 3) {
            cos2[0] = "A";
        } else if(this.replaceNo === 4) {
            cos2[1] = "B";
        } else {
            cos2[2] = "C";
            question = `Given that the above system has no solution, identify the value that ${this.replaceCo} CANNOT be.`;
        }
        return(
            <div>
                <div className="d-flex flex-column mb-3">
                    {this.getStandardFormJSX(...cos1)}
                    {this.getStandardFormJSX(...cos2)}
                </div>
                <p className="mb-2">{question}</p>
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

export default LinearStandard3;