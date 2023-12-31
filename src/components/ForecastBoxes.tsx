"use client";
import React, { useState } from "react";
import { formatDateTime } from '../constants'
import { formatSunriseSunsetTime } from '../constants'
import { IApiData } from "@/types";

const ForecastBoxes = (data: IApiData) => {
  const apiData = data.data;
  const boxesData = Array.isArray(apiData.list) ? apiData.list : [];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showMore, setShowMore] = useState(10)
  const handleBoxClick = (index: number) => setActiveIndex(index);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-5xl text-center">{apiData?.city?.name}</h2>
      <div className="flex flex-wrap justify-center gap-20 px-8">
        {boxesData.slice(0, showMore).map((data: any, index: number) => {
            const isFocused = index === activeIndex;
            const { dayOfWeek, time } = formatDateTime(data?.dt_txt);
            return (
              <div
                key={index}
                className={`rounded-[2.4rem] bg-[#bbd7ec] px-4 py-5 mt-8 relative cursor-pointer shadow-2xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 active:scale-95 ${
                  index === activeIndex
                    ? "w-[20rem] h-auto"
                    : "w-40 h-auto"
                }`}
                onClick={() => handleBoxClick(index)}
              >
                <div className={`flex items-center rounded-3xl h-12 px-5 bg-[#aecadf] ${isFocused ? "justify-between" : "justify-center"}`}>
                  <p className="font-semibold">{dayOfWeek}</p>
                  <p className={`${isFocused ? "font-medium text-xl" : "hidden"}`}>{time}</p>
                </div>
                <div className={`flex ${index === activeIndex ? "" : "flex-col-reverse gap-8"} justify-center items-center px-auto gap-12 mt-5`}>
                <p className="text-7xl font-medium font-aldrich">{data.main.temp.toFixed(0)}°</p>
                <div>
                  <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" width={100} height={100} />
                  <p className="font-semibold text-center text-sm w-[100px]">{data.weather[0].description}</p>
                </div>
              </div>
              <div className={`${index === activeIndex ? "" : "hidden"} mt-3`}>
                <p className="text-[#2b2928]">Real Feel: <span>{data.main.feels_like.toFixed(0)}°</span></p>
                <p className="text-[#2b2928]">Wind: <span>{data.wind.speed + " km/h"}</span></p>
                <div className="grid grid-cols-2 grid-rows-2">
                  <p className="text-[#2b2928]">Pressure: <span>{data.main.pressure}</span></p>
                  <p className="text-[#2b2928]">Sunrise: <span>{formatSunriseSunsetTime(apiData?.city?.sunrise).sunTime}</span></p>
                  <p className="text-[#2b2928]">Humidity: <span>{data.main.humidity + "%"}</span></p>
                  <p className="text-[#2b2928]">Sunset: <span>{formatSunriseSunsetTime(apiData?.city?.sunset).sunTime}</span></p>
                </div>
              </div>
              </div>
            );
        })}
      </div>
      <div className="flex mx-auto gap-6">
        <button 
          className=" w-48 flex justify-center items-center mt-12 border-4 border-[#aecadf] rounded-xl"
          onClick={() => setShowMore(showMore + 4)}
          >
          Show more
        </button>
        <button 
          className=" w-48 flex justify-center items-center mt-12 border-4 border-[#aecadf] rounded-xl"
          onClick={() => setShowMore(showMore >= 10 ? showMore - 4 : showMore)}
        >
          Show less
        </button>
      </div>
    </div>
  );
};

export default ForecastBoxes;
