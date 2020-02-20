module.exports = function repeater(str, options) {
    let res = [];
    let keys = Object.keys(options);
    let value = Object.values(options);
    let length = value[0];
    let additionFinish = value[2];
    let additionSeparatorFinish = value[4] + additionFinish;
    if( str == null){
        str = 'null'
    }
    res.push(str);

    if(keys.length == 1 && keys[0] === 'repeatTimes'){
        for(let i = 1; i < length; i++){
            res.push('+');
            res.push(str);
        }      
    }

    if(keys.length == 2){
        for(let i = 1; i < length; i++){
            res.push(value[1]);
            res.push(str);
        }
    }

    if(keys.length == 4){
        if(value[3] > 1){
            for(let i = 1; i < value[3]; i++){
               additionFinish += additionFinish;
            }
        }
        for (let i = 1; i < length; i++) {
            res.push(additionFinish);
            res.push(value[1]);
            res.push(str);
            if(i == length - 1){
                res.push(additionFinish);
            }
        }
        
    }

    if(value[0] == undefined && value[3] == undefined){
        res.push(additionFinish);
    }   

    if(keys.length == 5){
        if(value[3] > 1){
            for(let i = 1; i < value[3]; i++){
               additionFinish += additionSeparatorFinish ;
            }
        }
        for (let i = 1; i < length; i++) {
            res.push(additionFinish);
            res.push(value[1]);
            res.push(str);
            if(i == length - 1){
                res.push(additionFinish);
            }
        }
        if(length == 1){
            for (let i = 0; i < length; i++) {
                res.push(additionFinish);
            }
        }

    }

    return res.join('');
    
};
  