import { INavBarProps } from "@/types";
import React from "react";

const NavBar = ({ biggestCitiesList, setCity }: INavBarProps) => {
  return (
    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-6">
      {biggestCitiesList.map((city: string) => {
        return (
          <div
            key={city}
            className="flex justify-center items-center w-44 h-14 bg-[#bbd7ec] border-4 border-[#aecadf] rounded-3xl cursor-pointer"
            onClick={() => {
              setCity(city);
            }}
          >
            <p className="text-lg font-semibold">{city}</p>
          </div>
        );
      })}
    </nav>
  );
};

export default NavBar;
