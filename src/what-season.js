module.exports = function getSeason(date) {
  if(typeof date === 'object' && date.hasOwnProperty('new Date') === false && date.hasOwnProperty('toString') === true){
    throw new Error()
  }
  if(date === undefined){
    return 'Unable to determine the time of year!'
  }
  
    let month = date.getMonth();
    
    if (month >= 11 || month < 2) {
      return 'winter'
    }
    if (month >= 2 && month < 5) {
      return 'spring'
    }
    if (month >= 5 && month < 8) {
      return 'summer'
    }
    if (month >= 8 && month < 11) {
      return 'autumn'
    }
};
