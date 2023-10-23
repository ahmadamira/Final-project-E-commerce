import React from "react";
import Abouthero from "./Abouthero/Abouthero";
import Aboutgrid from "./Aboutgrid/Aboutgrid";
import Sec from "../Home-page/Sec/Sec";
import Foundergrid from "./Foundergrid/Foundergrid";
import Gridd from "./Gridd/Gridd";

const Aboutpage = () => {
  return (
    <div>
      <Abouthero img="/imgs/about.jpg" text="About Northstar" />
      <Aboutgrid />
      <Sec title="The Founders" />
      <Foundergrid />
      <Sec title="Testimonials" />
      <Gridd />
    </div>
  );
};

export default Aboutpage;
