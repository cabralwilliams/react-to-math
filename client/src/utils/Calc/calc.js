
const calc = {
    polyCalc: function(xVal, coArr) {
        let output = 0;
        if(coArr.length === 0) {
            return 0;
        }
        const deg = coArr.length - 1;
        for(let i = 0; i < coArr.length; i++) {
            output += coArr[i]*Math.pow(xVal,deg - i);
        }
        return output;
    },
    polyCalcZeroes: function(xVal, aCo, zArr) {
        let output = aCo;
        if(aCo === 0 || zArr.length === 0) {
            return 0;
        }
        for(let i = 0; i < zArr.length; i++) {
            output *= (xVal - zArr[i]);
        }
        return output;
    },
    getPolyCos: function(zArr) {
        if(!zArr || zArr.length === 0) {
            return [];
        } else if(zArr.length === 1) {
            return [1, -zArr[0]];
        }
        let current = [1, -zArr[0]];
        function getCoefficients(start,currentIndex,zeroArr) {
            const nextArr = [];
            for(let i = 0; i < start.length; i++) {
                if(i === 0) {
                    nextArr.push(1, -zeroArr[currentIndex])
                } else {
                    nextArr[nextArr.length - 1] += start[i];
                    nextArr.push(start[i]*(-zeroArr[currentIndex]));
                }
            }
            if(currentIndex === zeroArr.length - 1) {
                return nextArr;
            } else {
                return getCoefficients(nextArr,currentIndex + 1,zeroArr);
            }
        }
        return getCoefficients(current,1,zArr);
    },
    isAsymptotic: function(numZeroes,denZeroes,xpos,threshhold = 0.0005) {
        //Get the calculated values for the numerator and denominator
        const numValue = this.polyCalcZeroes(xpos,1,numZeroes);
        const denValue = this.polyCalcZeroes(xpos,1,denZeroes);
        //If denominator is zero and numerator is not zero, it is asymptotic
        if(denValue === 0 && numValue !== 0) {
            return true;
        }
        let numZerOb = {};
        let denZerOb = {};
        for(let i = 0; i < numZeroes.length; i++) {
            if(numZerOb.hasOwnProperty(numZeroes[i])) {
                numZerOb[numZeroes[i]] += 1;
            } else {
                numZerOb[numZeroes[i]] = 1;
            }
        }
        for(let i = 0; i < denZeroes.length; i++) {
            if(denZerOb.hasOwnProperty(denZeroes[i])) {
                denZerOb[denZeroes[i]] += 1;
            } else {
                denZerOb[denZeroes[i]] = 1;
            }
        }
        let numKeys = Object.keys(numZerOb);
        let denKeys = Object.keys(denZerOb);
        //If both are zero, need to check occurrences
        if(denValue === 0 && numValue === 0) {
            if(denZerOb[xpos] > numZerOb[xpos]) {
                return true;
            } else {
                return false;
            }
        }
        let rounded = Math.round(xpos);
        if(Math.abs(rounded - xpos) < threshhold) {
            const roundedNum = this.polyCalcZeroes(rounded,1,numZeroes);
            const roundedDen = this.polyCalcZeroes(rounded,1,denZeroes);
            if(roundedDen === 0 && roundedNum !== 0) {
                return true;
            }
            if(roundedDen === 0 && roundedNum === 0) {
                if(denZerOb[rounded] > numZerOb[rounded]) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        return false;
    },
    fillHoles: function(numZeroes,denZeroes,numCo,denCo) {
        const output = [];
        const holes = [];
        const nOb = {}, dOb = {};
        for(let i = 0; i < numZeroes.length; i++) {
            if(nOb.hasOwnProperty(`${numZeroes[i]}`)) {
                nOb[`${numZeroes[i]}`]++;
            } else {
                nOb[`${numZeroes[i]}`] = 1;
            }
        }
        for(let i = 0; i < denZeroes.length; i++) {
            if(dOb.hasOwnProperty(`${denZeroes[i]}`)) {
                dOb[`${denZeroes[i]}`]++;
            } else {
                dOb[`${denZeroes[i]}`] = 1;
            }
        }
        const newNum = [], newDen = [];
        //Fill with reduced numerators
        for(let key in nOb) {
            if(dOb.hasOwnProperty(key)) {
                if(nOb[key] > dOb[key]) {
                    for(let i = 0; i < nOb[key] - dOb[key]; i++) {
                        newNum.push(parseFloat(key));
                    }
                    holes.push(parseFloat(key));
                } else if(nOb[key] === dOb[key]) {
                    holes.push(parseFloat(key));
                }
            } else {
                for(let i = 0; i < nOb[key]; i++) {
                    newNum.push(parseFloat(key));
                }
            }
        }
        //Fill with reduced denominators
        for(let key in dOb) {
            if(nOb.hasOwnProperty(key)) {
                if(dOb[key] > nOb[key]) {
                    for(let i = 0; i < dOb[key] - nOb[key]; i++) {
                        newDen.push(parseFloat(key));
                    }
                }
            } else {
                for(let i = 0; i < dOb[key]; i++) {
                    newDen.push(parseFloat(key));
                }
            }
        }
        for(let i = 0; i < holes.length; i++) {
            output.push([holes[i],this.polyCalcZeroes(holes[i],numCo,newNum)/this.polyCalcZeroes(holes[i],denCo,newDen)]);
        }
        return output;
    },
    basicRoot: function(xVal, rootNumber) {
        //Return null if negative value is passed to even root
        if(xVal < 0 && rootNumber%2 === 0) {
            return null;
        }
        if(xVal === 0 || xVal === 1 || xVal === -1) {
            return xVal;
        }
        let val = Math.pow(Math.abs(xVal),1/rootNumber);
        if(xVal < 0) {
            val = -val;
        }
        return val;
    },
    calculateRoot: function(xVal, coefficients, rootNumber) {
        if(xVal*coefficients.m + coefficients.b < 0 && rootNumber%2 === 0) {
            return null;
        }
        if(rootNumber <= 0) {
            return null;
        }
        let argument = xVal*coefficients.m + coefficients.b;
        return coefficients.a*this.basicRoot(argument,rootNumber);
    },
    areRelativelyPrime: function(number1 = 5, number2 = 6) {
        if(number1 === 0 || number2 === 0) {
            return null;
        }
        if(Math.abs(number1) === Math.abs(number2)) {
            return false;
        }
        if(Math.abs(number1) === 1 || Math.abs(number2) === 1) {
            return true;
        }
        let max = Math.max(Math.abs(number1),Math.abs(number2));
        let min = Math.min(Math.abs(number1),Math.abs(number2));
        for(let i = 2; i < min + 1; i++) {
            if(max%i === 0 && min%i === 0) {
                return false;
            }
        }
        return true;
    },
    reselectIfZero: function(inputVal = 10) {
        const newInput = inputVal === 0 || isNaN(inputVal) ? 10 : inputVal;
        let output = -Math.abs(newInput) + Math.floor(Math.random()*(2*Math.abs(newInput) + 1));
        while(output === 0) {
            output = -Math.abs(newInput) + Math.floor(Math.random()*(2*Math.abs(newInput) + 1));
        }
        return output;
    },
    areParallel: function(cos1 = [2,3],cos2 = [3,4]) {
        return cos1[0]*cos2[1] === cos1[1]*cos2[0];
    },
    reducedCoefficients: function(inputVals) {
        const output = [...inputVals];
        let positiveValues = output.map(val => Math.abs(val));
        let minVal = Math.min(...positiveValues);
        if(minVal === 1) {
            return output;
        }
        let testVal = 1;
        while(testVal < minVal) {
            testVal++;
            let count = 0;
            for(let i = 0; i < positiveValues.length; i++) {
                if(positiveValues[i]%testVal === 0) {
                    count++;
                }
            }
            if(count === positiveValues.length) {
                for(let i = 0; i < positiveValues.length; i++) {
                    positiveValues[i] = positiveValues[i]/testVal;
                }
                minVal = minVal/testVal;
                testVal--;
            }
        }
        for(let i = 0; i < positiveValues.length; i++) {
            if(output[i] < 0) {
                output[i] = -positiveValues[i];
            } else {
                output[i] = positiveValues[i];
            }
        }
        return output;
    },
    //cos1 = [a,b], cos2 = [a,b], multiples = [m1, m2], solutionCos = [x,y]
    getLinearComboTarget: function(cos1, cos2, multiples, solutionCos) {
        let combinedA = cos1[0]*multiples[0] + cos2[0]*multiples[1];
        let combinedB = cos1[1]*multiples[0] + cos2[1]*multiples[1];
        let reducedCos = this.reducedCoefficients([combinedA,combinedB]);
        return reducedCos[0]*solutionCos[0] + reducedCos[1]*solutionCos[1];
    }
}

export default calc;