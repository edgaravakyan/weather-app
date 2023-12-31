import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import SearchIcon from "../../public/search.svg";
import SearchBar from "@/components/SearchBar";
import { IProps } from "@/types";

const Header = ({ setBiggestCitiesList, setCity, setUnits, units }: IProps) => {
  return (
    <header className="flex items-center w-full h-auto py-7 px-4 border-b-2 border-[#bbd7ec]">
      <nav className="flex w-full items-center justify-around flex-wrap gap-y-6 md:flex-nowrap ">
        <div className="flex items-center gap-6 cursor-pointer">
          <Image src={Logo} alt="" style={{ width: "52px", height: "auto" }} priority />
          <h2 className="text-xl font-black">WeatherAM</h2>
        </div>
        <div className="relative flex items-center gap-5 ml-5 md:ml-0">
          <Image
            src={SearchIcon}
            alt=""
            width={30}
            height={30}
            className="cursor-pointer absolute left-3"
          />
          <div className="flex flex-col">
            <SearchBar
              setBiggestCitiesList={setBiggestCitiesList}
              setCity={setCity}
            />
          </div>
        </div>
        <div className="flex ml-5 md:ml-0">
          <p className="text-xl font-bold">
            <span className={`cursor-pointer ${units === "metric" ? "text-[#38ccdc]" : ""}`} onClick={() => setUnits("metric")}>
              °C
            </span>{" "} {" "} 
            |
            {" "} {" "}
            <span
              className={`cursor-pointer ${units === "imperial" ? "text-[#38ccdc]" : ""}`}
              onClick={() => setUnits("imperial")}
            >
              °F
            </span>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
