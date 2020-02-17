module.exports = function transform(arr) {
    if(!Array.isArray(arr)){
        throw new Error(false)
    }
    const controlSequences = ['--double-next', '--double-prev', '--discard-next', '--discard-prev']
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(!controlSequences.includes(arr[i])){
            res.push(arr[i])
        }
        if(arr[i] === '--double-next'){
            if(i != arr.length - 1 && !controlSequences.includes(arr[i + 1])){
                res.push(arr[i + 1]);
            }
        }
        if(arr[i] === '--double-prev'){
          if(i > 0 && !controlSequences.includes(arr[i - 1])){
             res.push(arr[i - 1]);
           }
        }
        if(arr[i] === '--discard-next'){
                i++;
        }
        if(arr[i] === '--discard-prev'){  
                res.pop();  
        }
    }
    return res;
};
