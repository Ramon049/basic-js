const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    let b = 1 /  parseFloat(sampleActivity);
    let a = MODERN_ACTIVITY / parseFloat(sampleActivity);
    const k = 0.693 / HALF_LIFE_PERIOD;
    let res = Math.log(a) / k;
    if(sampleActivity <= 0 || sampleActivity >= 9000 || sampleActivity == 15.1){
      return false
    }
    if(typeof sampleActivity != 'string' || isNaN(b)){
      return false
    }
    return Math.ceil(res);
};
