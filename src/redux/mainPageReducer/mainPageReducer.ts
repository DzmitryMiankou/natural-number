import ImgMain from "../../img/imgMain.svg";
import Comparison from "../../img/Comparison.svg";
import PlusImg from "../../img/plus.svg";
import Minus from "../../img/minus.svg";
import Multiplication from "../../img/multiplication.svg";
import Division from "../../img/Division .svg";

type arrCardType<T> = {
  main: Array<{
    title: T;
    list: Array<{ text: T; path: T; img: T }>;
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
          img: ImgMain,
        },
        {
          text: "Сравнение, или что больше",
          path: "/comparisonNumb",
          img: Comparison,
        },
        {
          text: "Сложение или сумма",
          path: "/plusNumber",
          img: PlusImg,
        },
        {
          text: "Вычитание или разность",
          path: "/minusNumber",
          img: Minus,
        },
        {
          text: "Умножение натуральных чисел",
          path: "/multiplicationNumber",
          img: Multiplication,
        },
        {
          text: "Деление натуральных чисел",
          path: "/divisionNumber",
          img: Division,
        },
      ],
      footer: `© ${new Date().getFullYear()}, Дмитрий Меньков, г. Молодечно`,
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
