type Prop<N extends number> = { min: N; max: N; length: N };
type RandomProp<N extends number> = Pick<Prop<N>, "min" | "max">;
type ResultNumbersType<N extends number> = {
  multiplier: N[];
  quotient: N[];
};
type PushNumbType = {
  objData: ResultNumbersType<number>;
  data: number;
  path: "multiplier" | "quotient";
};
type StateType<N extends number> = {
  [K: number]: ResultNumbersType<N>;
};

export const useRandomInt = ({ min, max, length }: Prop<number>) => {
  const randomInteger = (params: RandomProp<number>): number =>
    +Math.floor(params.min + Math.random() * (params.max + 1 - params.min));

  const resultNumbers: StateType<number> = {};

  for (let i = 1; i <= length; i++)
    resultNumbers[randomInteger({ min, max })] = {
      multiplier: [],
      quotient: [],
    };

  const keys: Array<string> = Object.keys(resultNumbers);

  const pushNumberInArray = ({ objData, data, path }: PushNumbType): number =>
    objData[path].push(data);

  function getFactorizationNumber(el: number): void {
    let quotient: number = el;
    const initData: PushNumbType = {
      objData: resultNumbers[el],
      data: el,
      path: "quotient",
    };
    pushNumberInArray({ ...initData });
    for (let i = 2; i <= quotient; ) {
      if (quotient % i === 0) {
        pushNumberInArray({ ...initData, data: i, path: "multiplier" });
        quotient /= i;
        pushNumberInArray({ ...initData, data: quotient });
      } else i++;
    }
  }

  keys.forEach((item) => getFactorizationNumber(+item));

  return resultNumbers;
};
