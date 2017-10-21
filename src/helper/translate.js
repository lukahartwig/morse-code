const morseCodeTable = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9'
};

export const MORSE_CODE_REGEX = /^[.\-\s]+$/;

export const lookupMorseCode = morseCode => morseCodeTable[morseCode];

export const lookupPlainLetter = letter => Object.keys(morseCodeTable).find(key => morseCodeTable[key] === letter);

export const lookupPlainWord = word => word.split('').map(letter => lookupPlainLetter(letter)).join(' ');

export const translate = (input, translationLookup) => {
    return input
        .toUpperCase()
        .split(' ')
        .map(symbol => translationLookup(symbol))
        .join(' ')
        .trim()
        .toLocaleLowerCase();
};

export default input => {
    if (input.match(MORSE_CODE_REGEX)) {
        return translate(input, lookupMorseCode);
    }

    return translate(input, lookupPlainWord)
}

