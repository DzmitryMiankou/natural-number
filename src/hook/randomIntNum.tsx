type Prop<N extends number> = { min: N; max: N; length: N };
type RandomProp<N extends number> = Pick<Prop<N>, "min" | "max">;

export const useRandomInt = ({ min, max, length }: Prop<number>) => {
  const randomInteger = (params: RandomProp<number>): number =>
    +Math.floor(params.min + Math.random() * (params.max + 1 - params.min));

  type ReturnTypeRandom = ReturnType<typeof randomInteger>;
  const resultNumbers: {
    [key: ReturnTypeRandom]: Array<ReturnTypeRandom>;
  } = {};

  for (let i = 1; i <= length; i++)
    resultNumbers[randomInteger({ min, max })] = [];

  const keys: Array<string> = Object.keys(resultNumbers);

  function pushInArr(el: number) {
    let quotient: number = el;

    for (let i = 2; i <= quotient; ) {
      if (quotient % i === 0) {
        resultNumbers[el].push(i);
        quotient /= i;
      } else i++;
    }
  }

  keys.forEach((item) => pushInArr(+item));

  return resultNumbers;
};
