import xss from 'xss';

const showValue = (value: string, phrase: string) => {
  try {
    return xss(value.replace(new RegExp(phrase, 'i'), (v) => `<b>${v}</b>`));
  } catch (e) {
    return value;
  }
};

export const emphesizeArrayOfStrings = (
  value: string,
  listOfPhrase: string[]
) => {
  if (listOfPhrase.length === 1) {
    return showValue(value, listOfPhrase.pop());
  } else if (listOfPhrase.length < 1) {
    return value;
  } else {
    const phraze = listOfPhrase.pop();
    return emphesizeArrayOfStrings(showValue(value, phraze), listOfPhrase);
  }
};
