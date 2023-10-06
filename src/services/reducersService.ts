import { TypeActionDivision } from "../redux/divisionReducer/DivisionReducer";
import { TypeActionRadio } from "../redux/radioReducer/RadioReducer";
import { TypeActionStar } from "../redux/plusReducer/Input";

export type TypeActionObj = { key: number | string; value: string };

const reducerObjActualData = (
  obj: TypeActionObj[],
  action: TypeActionDivision | TypeActionRadio | TypeActionStar
): TypeActionObj[] => {
  const newArr = obj.reduce((o: TypeActionObj[], i) => {
    if (!o.find((el) => el.key === i.key))
      o.push({
        ...i,
        value: i.key === action.value.key ? action.value.value : i.value,
      });
    return o;
  }, []);
  return newArr;
};

export { reducerObjActualData };
