import React from "react";
import Name from "../components/Animations/Name";

const Section1 = () => {
  return (
    <div>
      <Name
        {...{
          name: "DHIRAJ AMBEKAR",
          animate: {
            speed: 1,
            angel: 4,

          },
        }}
      />
    </div>
  );
};

export default Section1;
