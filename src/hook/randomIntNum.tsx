import React from "react";

const enum NameEnum {
  multiplier = "multiplier",
  quotient = "quotient",
}
type ResultName = NameEnum.multiplier | NameEnum.quotient;
type PropName = "min" | "max" | "length";
type ResultNumbersTypeReadonly = Readonly<Record<ResultName, number[]>>;
type PropType = Readonly<Record<PropName, number>>;
type RandomProp = Omit<PropType, "length">;
interface PushNumbType {
  objData: ResultNumbersTypeReadonly;
  data: number;
  readonly path: ResultName;
}
type StateType = {
  [K: number]: ResultNumbersTypeReadonly;
};

export const useRandomInt = ({ min, max, length }: PropType) => {
  const [get, set] = React.useState<StateType | null>(null);
  React.useEffect(() => {
    const randomInteger = (params: RandomProp): number =>
      +Math.floor(params.min + Math.random() * (params.max + 1 - params.min));

    const resultNumbers: StateType = {};

    for (let i = 1; ; i++)
      if (Object.keys(resultNumbers).length < length) {
        resultNumbers[randomInteger({ min, max })] = {
          [NameEnum.multiplier]: [],
          [NameEnum.quotient]: [],
        };
      } else break;

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

      for (let i = 2; i <= quotient; )
        if (quotient % i === 0) {
          pushNumberInArray({
            ...initData,
            data: i,
            path: NameEnum.multiplier,
          });
          quotient /= i;
          pushNumberInArray({ ...initData, data: quotient });
        } else i++;
    }

    const keys: Array<string> = Object.keys(resultNumbers);
    keys.forEach((item) => getFactorizationNumber(+item));

    set(resultNumbers);
  }, [length, max, min]);
  return get;
};
