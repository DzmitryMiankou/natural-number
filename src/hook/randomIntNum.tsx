const enum NameEnum {
  multiplier = "multiplier",
  quotient = "quotient",
}
type Prop<N extends number> = { min: N; max: N; length: N };
type RandomProp<N extends number> = Omit<Prop<N>, "length">;
type ResultNumbersType<N extends number> = {
  readonly [NameEnum.multiplier]: N[];
  readonly [NameEnum.quotient]: N[];
};
type PushNumbType = {
  readonly objData: ResultNumbersType<number>;
  readonly data: number;
  readonly path: NameEnum.multiplier | NameEnum.quotient;
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
      [NameEnum.multiplier]: [],
      [NameEnum.quotient]: [],
    };

  const keys: Array<string> = Object.keys(resultNumbers);

  const pushNumberInArray = ({ objData, data, path }: PushNumbType): number =>
    objData[path].push(data);

  function getFactorizationNumber(el: number): void {
    let quotient: number = el;
    const initData: PushNumbType = {
      objData: resultNumbers[el],
      data: el,
      path: NameEnum.quotient,
    };
    pushNumberInArray({ ...initData });
    for (let i = 2; i <= quotient; ) {
      if (quotient % i === 0) {
        pushNumberInArray({ ...initData, data: i, path: NameEnum.multiplier });
        quotient /= i;
        pushNumberInArray({ ...initData, data: quotient });
      } else i++;
    }
  }

  keys.forEach((item) => getFactorizationNumber(+item));

  return resultNumbers;
};
