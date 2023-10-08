const UPDATE = "MULTIPLICATION_UPDATE";

type genType<T> = { a: T; b: number[]; c: T };

const rundomNumber = (startNumber: number, b: number): number => {
  return Math.floor(b + Math.random() * (startNumber + 1 - b));
};

const generateMathExpression = (): Array<genType<number>> => {
  const productNumbers = rundomNumber(9, 2);
  const productResult = productNumbers * 3;
  let arrAnswerErr = [];
  for (let i = 0; i < 300; i++) {
    if (arrAnswerErr.length === 2) break;
    const errNumber = rundomNumber(40, 9);
    if (
      errNumber !== productResult &&
      errNumber > productResult &&
      errNumber < productResult * 4
    )
      arrAnswerErr.push(errNumber);
  }
  return [
    {
      a: productNumbers,
      b: [...arrAnswerErr, productResult].sort(() => Math.random() - 0.5),
      c: productResult,
    },
  ];
};

const initialState: {
  startData: Array<genType<number>>;
} = {
  startData: [...generateMathExpression()],
};

const multiplicationReducer = (
  state = initialState,
  action: { type: typeof UPDATE }
) => {
  switch (action.type) {
    case UPDATE: {
      return {
        ...initialState,
        startData: generateMathExpression(),
      };
    }
    default:
      return state;
  }
};

export const updateMultiplicationPageAction = () => ({
  type: UPDATE,
});
export default multiplicationReducer;
