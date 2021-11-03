const stringLength = (string) => {
  const countChar = string.length;
  if (countChar > 0 && countChar <= 10) {
    return countChar;
  } else return "string to long";
};

module.exports = stringLength;
