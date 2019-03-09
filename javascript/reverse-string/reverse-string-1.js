// recursion: iterative process

export const reverseString = (str, i = 0, acc = '') => {
    if (i === str.length) return acc;
    const char = str[i];
    return reverseString(str, i + 1, `${char}${acc}`);
};