import React from "react";
import { ST } from "./style";
import TitlePage from "../globalComponent/TitlePage";
import data from "../../data/twoLevelData.json";
import { ReactComponent as Img } from "../../img/mins.svg";
import { useRandomInt } from "../../hook/randomIntNum";

const FactorizationPage: React.FC = () => {
  const state = data[0].factorizationData;
  const useRandomI = useRandomInt({ min: 4, max: 20, length: 2 });

  console.log(useRandomI);

  return (
    <TitlePage
      alignMain={"space-between"}
      educationText={state.educationText}
      educationTest={state.educationTest}
      title={{ title: state.title, accent: state.accent }}
      boximg={
        <>
          <ST.PVariant2>{state.qvest}</ST.PVariant2>
          <ST.Box>
            <ST.Block />
            <Img />
          </ST.Box>
        </>
      }
    />
  );
};

export default FactorizationPage;
