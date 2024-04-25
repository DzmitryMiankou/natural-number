export const useRandomInt = ({ min, max }: { min: number; max: number }) => {
  function randomInteger(min: number, max: number): number {
    const rand: number = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  let n1: number = 0;
  let n2: number = 0;

  for (let i = 0; n2 === n1; i++) {
    n1 = randomInteger(min, max);
    n2 = randomInteger(min, max);
  }

  const resultNumbers: {
    [key: number]: Array<number>;
  } = {
    [n1]: [],
    [n2]: [],
  };

  function pushInArr(el: number) {
    let quotient: number = el;

    for (let i = 2; i <= quotient; ) {
      if (quotient % i === 0) {
        resultNumbers[el].push(i);
        quotient = quotient / i;
      } else i = i + 1;
    }
  }

  const keys = Object.keys(resultNumbers);

  console.log(keys);

  keys.forEach((item) => pushInArr(+item));

  return resultNumbers;
};
