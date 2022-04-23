
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
    }
}

export default calc;