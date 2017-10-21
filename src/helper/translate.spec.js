import defaultTranslate, { MORSE_CODE_REGEX, translate, lookupMorseCode, lookupPlainLetter } from './translate';

describe('translate', () => {
    it('should match morse code', () => {
        const morseCode = '.... . .-.. .-.. --- .-- --- .-. .-.. -..';
        expect(morseCode.match(MORSE_CODE_REGEX)).toBeTruthy();
    });

    it('should not match plain text', () => {
        const plainText = 'Hello World';
        expect(plainText.match(MORSE_CODE_REGEX)).toBeFalsy();
    });

    it('should lookup the morse code symbol', () => {
        const plainLetter = 'A';
        const morseCodeSymbol = '.-';
        expect(lookupPlainLetter(plainLetter)).toBe(morseCodeSymbol);
    });

    it('should return undefined for unknown letters', () => {
        const unknownLetter = '@';
        expect(lookupPlainLetter(unknownLetter)).toBeUndefined()
    });

    it('should lookup the morse code symbol', () => {
        const morseCodeSymbol = '.-';
        const plainLetter = 'A';
        expect(lookupMorseCode(morseCodeSymbol)).toBe(plainLetter);
    });

    it('should return undefined for unknown letters', () => {
        const unknownSymbol = '-------';
        expect(lookupPlainLetter(unknownSymbol)).toBeUndefined()
    });

    it('should split and translate the text', () => {
        const text = 'ABC DEF';
        const expected = '1 2 3 4 5 6';
        const mockLookup = jest.fn();
        mockLookup
            .mockReturnValueOnce('1 2 3')
            .mockReturnValueOnce('4 5 6');

        const actual = translate(text, mockLookup);
        expect(actual).toBe(expected);
        expect(mockLookup).lastCalledWith('DEF')
    });

    it('should translate plain text into morse code', () => {
        const plainText = 'Hello World';
        const morseCode = '.... . .-.. .-.. --- .-- --- .-. .-.. -..';

        expect(defaultTranslate(plainText)).toBe(morseCode);
    });

    it('should translate morse code into plain text', () => {
        const plainText = 'h e l l o w o r l d';
        const morseCode = '.... . .-.. .-.. --- .-- --- .-. .-.. -..';

        expect(defaultTranslate(morseCode)).toBe(plainText);
    });
});