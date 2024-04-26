type Prop<N extends number> = { min: N; max: N; length: N };
type RandomProp<N extends number> = Pick<Prop<N>, "min" | "max">;

export const useRandomInt = ({ min, max, length }: Prop<number>) => {
  const randomInteger = (params: RandomProp<number>): number =>
    +Math.floor(params.min + Math.random() * (params.max + 1 - params.min));

  type ReturnTypeRandom = ReturnType<typeof randomInteger>;
  const resultNumbers: {
    [key: ReturnTypeRandom]: { multiplier: number[]; quotient: number[] };
  } = {};

  for (let i = 1; i <= length; i++)
    resultNumbers[randomInteger({ min, max })] = {
      multiplier: [],
      quotient: [],
    };

  const keys: Array<string> = Object.keys(resultNumbers);

  function pushInArr(el: number): void {
    let quotient: number = el;

    for (let i = 2; i <= quotient; ) {
      if (quotient % i === 0) {
        const objData = resultNumbers[el];
        objData.multiplier.push(i);
        quotient /= i;
        objData.quotient.push(quotient);
      } else i++;
    }
  }

  keys.forEach((item) => pushInArr(+item));

  return resultNumbers;
};
