function abbreviateString(string) {
  if (typeof string === 'string') {
    const stringArray = string.split(' ');
    const firstWrod = stringArray[0];
    const lastWord = stringArray[stringArray.length - 1];
    const lastWordFirstLetter = lastWord[0].toUpperCase();
    let finalString = '';
    finalString = finalString.concat(firstWrod, ' ', lastWordFirstLetter, '.');

    return finalString;
  }
  throw Error('Invalid parameters');
}

export {
  abbreviateString,
};
