import React, { useState } from "react";
import { Forward } from "@mui/icons-material";

const Card = ({ icon, words, maxwords }) => {
  const [isFalse, setIsFalse] = useState(false);
  return (
    <div className="flex pt-5 p-5 lg:w-[24rem]  bg-white shadow-md">
      <img src={icon} alt="plane" width={90} />
      <div className="flex flex-col">
        <span className="font-bold text-xl">Air Freight</span>

        <span className="text-xs">
          {words.slice(0, isFalse ? 5 : maxwords).join(" ")}
        </span>
        <p className="text-[#050b49]" onClick={() => setIsFalse(!isFalse)}>
          Read More
          <Forward className="text-white !ml-2 bg-[#050b49] !h-4" />{" "}
        </p>
      </div>
    </div>
  );
};

export default Card;
