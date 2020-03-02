module.exports = class DepthCalculator {

    calculateDepth(array) {
        let res = 1;
        array = array.filter(x => Array.isArray(x));
            if(Array.isArray(array[0])) {
                array = array.flat();
                res = this.calculateDepth(array);
                res++;
        }
        return res++;
    }
};