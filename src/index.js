const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let start = 0;
    let decodedStr = '';
    for( let i = 0; i < expr.length/10; i++) {
        let morse = '';
        let decodedLetter = expr.slice(start, start+10);
        start +=10;
        if(decodedLetter === '**********'){
            decodedStr += ' ';
            continue; 
        }
        for(j = 0; j < decodedLetter.length; j+=2) {
            if(decodedLetter.slice(j, j+2) === '10') {
                morse += '.';
            } else if(decodedLetter.slice(j, j+2) === '11'){
                morse += '-';
            }
        }
        decodedStr += MORSE_TABLE[morse]; 
    }
    return decodedStr;
}

module.exports = {
    decode
}