// loop

export const reverseString = (str) => {
    let acc = '';
    for (let i = 0; i < str.length; i += 1) {
        acc = `${str[i]}${acc}`;
    };
    return acc;
};