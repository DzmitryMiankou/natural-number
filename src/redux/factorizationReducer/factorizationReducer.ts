const PARAMS = "PARAMS___$#t34tEFWD$#7745%%#$#er";
const SETVALUESFACT = "SETVALUESFACT-43tfdsEGW34$%%@";

const enum NameEnum {
  multiplier = "multiplier",
  quotient = "quotient",
}
type ResultName = NameEnum.multiplier | NameEnum.quotient;
type PropName = "min" | "max" | "length";
type ResultNumbersTypeReadonly = Readonly<
  Record<ResultName, { [K: number]: string }[]>
>;
type PropType = Readonly<Record<PropName, number>>;
type RandomProp = Omit<PropType, "length">;
interface PushNumbType {
  objData: ResultNumbersTypeReadonly;
  data: string;
  readonly path: ResultName;
}
type StateType = {
  [K: string]: ResultNumbersTypeReadonly;
};

type TypeAction = ReturnType<ActionType<typeof FactorActions>>;
type ActionType<T> = T extends { [key: string]: infer V } ? V : never;

const randomInteger = (params: RandomProp): number =>
  +Math.floor(params.min + Math.random() * (params.max + 1 - params.min));

const initialState: StateType = {};

const factorizationReducer = (state = initialState, action: TypeAction) => {
  switch (action.type) {
    case PARAMS: {
      const resultNumbers: StateType = {};
      const { min, max, length } = action.value;
      for (let i = 1; ; i++)
        if (Object.keys(resultNumbers).length < length)
          resultNumbers[randomInteger({ min, max })] = {
            [NameEnum.multiplier]: [],
            [NameEnum.quotient]: [],
          };
        else break;

      const pushNumberInArray = ({
        objData,
        data,
        path,
      }: PushNumbType): number => objData[path].push({ [data]: "" });

      const getFactorizationNumber = (el: number): void => {
        let quotient: number = el;
        const initData: PushNumbType = {
          objData: resultNumbers[el],
          data: `0-${el}`,
          path: NameEnum.quotient,
        };
        pushNumberInArray({ ...initData });

        let ind = 0;
        let ind2 = 1;

        for (let i = 2; i <= quotient; )
          if (quotient % i === 0) {
            pushNumberInArray({
              ...initData,
              data: `${ind++}-` + i,
              path: NameEnum.multiplier,
            });
            quotient /= i;
            pushNumberInArray({ ...initData, data: `${ind2++}-` + quotient });
          } else i++;
      };

      const keys: Array<string> = Object.keys(resultNumbers);
      keys.forEach((item) => getFactorizationNumber(+item));
      return { ...resultNumbers };
    }
    case SETVALUESFACT: {
      const newState = { ...state };
      const { nameNumb, index, val, resultDiv } = action.value;
      const mutationArr = [...state[nameNumb][resultDiv]];
      const findIndexInArr = newState[nameNumb][resultDiv].findIndex((el) => {
        return Object.keys(el)[0] === index;
      });
      mutationArr[findIndexInArr] = {
        [index]: val !== 0 ? `${val}` : "?",
      };
      console.log(index);
      return {
        ...newState,
        [nameNumb]: { ...newState[nameNumb], [resultDiv]: [...mutationArr] },
      };
    }
    default:
      return state;
  }
};

export const FactorActions = {
  setParamsAction: (value: PropType) =>
    ({
      type: PARAMS,
      value: value,
    } as const),
  setValueAction: (value: {
    nameNumb: number;
    index: string;
    val: number;
    resultDiv: "multiplier" | "quotient";
  }) => {
    return {
      type: SETVALUESFACT,
      value: value,
    } as const;
  },
};

export default factorizationReducer;
