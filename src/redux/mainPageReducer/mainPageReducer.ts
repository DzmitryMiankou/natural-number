import ImgMain from "../../img/imgMain.svg";
import ImgMain2 from "../../img/imgMain2.svg";
import Comparison from "../../img/Comparison.svg";
import PlusImg from "../../img/plus.svg";
import Minus from "../../img/minus.svg";
import Multiplication from "../../img/multiplication.svg";

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
          text: "Что такое натуральные числа",
          path: "/numperNat",
          img: ImgMain,
        },
        {
          text: "Сравнение или что больше",
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
          path: "/g",
          img: Multiplication,
        },
        { text: "Деление натуральных чисел", path: "/s", img: ImgMain2 },
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
