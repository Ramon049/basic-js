class VigenereCipheringMachine {
    constructor(reverse) {
        this.direction = (reverse === false);
    }

    encrypt(message, key) {

        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let arrMessage = message.split('');
        let arrKey = [];
        let res = [];

        for (let i = 0; i < key.length; i++) {
            arrKey.push(key[i]);
            if(arrKey.length == message.length){
                break;
            }
            if(i == key.length - 1){
                i = -1;
            }
        }

        for (let i = 0; i < arrMessage.length; i++) {
            if(!alphabet.includes(arrMessage[i].toUpperCase())) {
                arrKey.splice(i , 0 , arrMessage[i])
            }
        }

        for (let i = 0; i < arrMessage.length; i++) {
            if(alphabet.includes(arrMessage[i].toUpperCase())) {
                let index = alphabet.indexOf(arrMessage[i].toUpperCase());
                let indexKey = alphabet.indexOf(arrKey[i].toUpperCase());
                let resIndex = index + indexKey;

                if(resIndex >= alphabet.length){
                    resIndex = resIndex - alphabet.length;
                    res.push(alphabet[resIndex]);
                } else {
                    res.push(alphabet[resIndex]);
                }
            }
            else {
                res.push(arrMessage[i].toUpperCase());
            }
        }
        if(this.direction){
            return res.reverse().join('') 
        }
        return res.join('')    
    }

    decrypt(encryptedMessage, key) {

        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let arrEncryptedMessage = encryptedMessage.split('');
        let arrKey = [];
        let res = [];

        for (let i = 0; i < key.length; i++) {
            arrKey.push(key[i]);
            if(arrKey.length == encryptedMessage.length){
                break;
            }
            if(i == key.length - 1){
                i = -1;
            }
        }

        for (let i = 0; i < arrEncryptedMessage.length; i++) {
            if(!alphabet.includes(arrEncryptedMessage[i].toUpperCase())) {
                arrKey.splice(i , 0 , arrEncryptedMessage[i])
            }
        }

        for (let i = 0; i < arrEncryptedMessage.length; i++) {
            if(alphabet.includes(arrEncryptedMessage[i].toUpperCase())) {
                let index = alphabet.indexOf(arrEncryptedMessage[i].toUpperCase());
                let indexKey = alphabet.indexOf(arrKey[i].toUpperCase());
                let resIndex = index - indexKey;

                if(index < indexKey){
                    resIndex = resIndex + alphabet.length;
                    res.push(alphabet[resIndex]);
                } else {
                    res.push(alphabet[resIndex]);
                }
            }
            else {
                res.push(arrEncryptedMessage[i].toUpperCase());
            }
        }
        if(this.direction){
            return res.reverse().join('') 
        }
        return res.join('')
    }
}

module.exports = VigenereCipheringMachine;
