
// https://stackoverflow.com/questions/5457416/how-to-validate-numeric-values-which-may-contain-dots-or-commas
export const parseNumbersFromString = (
    text: string,
    fallbackNumber = null
): number[] => {
    const matches = text.match(/\d+([.,][\d{1,2}])?/g);

    if (!matches) return [fallbackNumber];

    return matches.map(Number);
};

export const parseNumberFromString = (text: string, fallbackNumber = null) => {
    return parseNumbersFromString(text, fallbackNumber)[0];
};