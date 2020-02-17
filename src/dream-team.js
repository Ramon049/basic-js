module.exports = function createDreamTeam(team) {
  if(!Array.isArray(team)){
    return false
  }
  let res = [];

  for(let i = 0, j = 0; i < team.length; i++){
    if(typeof team[i] !== 'string'){
      continue;
    }
      res.push(team[i].trim()[j].toUpperCase());
  }
  return res.sort().join('');
};