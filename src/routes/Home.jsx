import React, { useContext } from "react";
import CategorySlider from "../components/Slider";
import { Consumer, Context } from "../ContextApi";
import Shop from "./Shop";
const Home = () => {
  /**
   * @type {import('../types').ContextState}
   */
  const { store } = useContext(Context);
  return (
    <>
      <CategorySlider data={store} />
    </>
  );
};

export default Home;
