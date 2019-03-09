// classic recursion (with substr)

export const reverseString = (str) => {
    if (str.length === 0) return str;
    return `${reverseString(str.substr(1))}${str[0]}`;
};