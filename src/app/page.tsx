"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ForecastBoxes from "@/components/ForecastBoxes";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { biggestCities } from "@/constants";

export default function Home() {
  const [city, setCity] = useState<string>("yerevan");
  const [weather, setWeather] = useState<any>("");
  const [biggestCitiesList, setBiggestCitiesList] = useState<string[]>(biggestCities);
  const [units, setUnits] = useState('metric')
  
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city === null || undefined ? "yerevan" : city}&units=${units}&appid=772181a5766b88756653593c35b9f562`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(url);
        setWeather(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
  }, [city, units]);

  return (
    <>
      <Header setBiggestCitiesList={setBiggestCitiesList} setCity={setCity} setUnits={setUnits} units={units} />
      <main className="flex flex-col overflow-hidden px-6 pt-12 pb-16 gap-20 md:px-14">
        <NavBar biggestCitiesList={biggestCitiesList} setCity={setCity} />
        {weather !== null && <ForecastBoxes data={weather} />}
      </main>
    </>
  );
}
