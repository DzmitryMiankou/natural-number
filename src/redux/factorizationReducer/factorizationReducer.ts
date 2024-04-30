const PARAMS = "PARAMS";
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
  data: number;
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
      const min = action.value.min;
      const max = action.value.max;
      for (let i = 1; ; i++)
        if (Object.keys(resultNumbers).length < action.value.length)
          resultNumbers[randomInteger({ min, max })] = {
            [NameEnum.multiplier]: [],
            [NameEnum.quotient]: [],
          };
        else break;

      const pushNumberInArray = ({
        objData,
        data,
        path,
      }: PushNumbType): number => objData[path].push({ [+data]: "" });

      const getFactorizationNumber = (el: number): void => {
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
      };

      const keys: Array<string> = Object.keys(resultNumbers);
      keys.forEach((item) => getFactorizationNumber(+item));
      return { ...resultNumbers };
    }
    case SETVALUESFACT: {
      const newState = { ...state };

      const { nameNumb, index, val } = action.value;
      const gr = [...state[nameNumb].quotient];
      const d = newState[nameNumb].quotient.findIndex((el) => {
        return +Object.keys(el)[0] === index;
      });

      gr[d] = { [index]: `${val}` };

      return {
        ...newState,
        [nameNumb]: { ...newState[nameNumb], quotient: [...gr] },
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
  setValueAction: (value: { nameNumb: number; index: number; val: number }) => {
    return {
      type: SETVALUESFACT,
      value: value,
    } as const;
  },
};

export default factorizationReducer;
