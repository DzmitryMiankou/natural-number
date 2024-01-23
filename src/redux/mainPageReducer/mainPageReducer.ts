type arrCardType<T> = {
  main: Array<{
    title: T;
    list: Array<{ text: T; path: T }>;
    footer: T;
  }>;
};

const initialState: arrCardType<string> = {
  main: [
    {
      title: "натуральные числа",
      list: [
        {
          text: "Что такое натуральные числа?",
          path: "/numperNat",
        },
        {
          text: "Сравнение или что больше",
          path: "/comparisonNumb",
        },
        {
          text: "Сложение или сумма",
          path: "/plusNumber",
        },
        {
          text: "Вычитание или разность",
          path: "/minusNumber",
        },
        {
          text: "Умножение натуральных чисел",
          path: "/multiplicationNumber",
        },
        {
          text: "Деление натуральных чисел",
          path: "/divisionNumber",
        },
      ],
      footer: `© 2023 - ${new Date().getFullYear()}, Дмитрий Меньков, г. Молодечно`,
    },
  ],
};

const STATIC = "static";

interface TypeAction<T> {
  type: T;
}

type Action = TypeAction<typeof STATIC>;

const mainPageReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case STATIC: {
      return { ...state };
    }
    default:
      return state;
  }
};

export const staticAction = () => ({ type: STATIC });
export default mainPageReducer;
