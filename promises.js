const testNum = (number) => {
  if (number > 10) {
    return Promise.resolve(`${number} is greater than 10, success!`);
  } else {
    return Promise.reject(Error(`${number} is less than 10, error!`));
  }
};

const makeAllCaps = (words) => {
  const allStrings = words.every(element => typeof element === "string");
  if (allStrings) {
    const uppercaseWords = words.map(word => word.toUpperCase());
    return Promise.resolve(uppercaseWords);
  } else {
    return Promise.reject(Error('The array you passed in contained an element that was not a string!'));
  }
};

const sortWords = (words) => {
  words.sort();
  return Promise.resolve(words);
};