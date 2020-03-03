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
    for (let i = 0; i < expr.length/10; i++) {
        let morse = '';
        let decodeLetter = expr.slice(start, start + 10);
        start+=10;
        if(decodeLetter === '**********') {
            decodedStr += ' ';
            continue;
        }
        for (let j = 0; j < 10; j += 2) {
            if(decodeLetter.slice(j, j+2) === "10") {
                morse += '.';
            } else if(decodeLetter.slice(j, j+2) === '11') {
                morse += '-';
            }
        }
        decodedStr += MORSE_TABLE[morse.split('').join('')];
    }
    return decodedStr;
}

module.exports = {
    decode
}