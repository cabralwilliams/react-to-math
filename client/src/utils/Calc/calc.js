
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
    }
}

export default calc;