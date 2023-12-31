"use client";
import React, { useEffect, useState } from "react";
import { biggestCities, cities } from "@/constants";

const SearchBar = ({ setBiggestCitiesList, setCity }: any) => {
  const [value, setValue] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const suggestions = cities.filter((city: string) => {
    const searchItem = value.toLowerCase();
    const fullName = city.toLowerCase();
    return searchItem && fullName.startsWith(searchItem);
  });

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    setShowSuggestions(false);
  };

const searchFunctionality = () => {
  if(value === "" || !cities.includes(value)) return null
  setBiggestCitiesList([...biggestCities, value]);
  setCity(value);
};

  useEffect(() => {
    searchFunctionality();
  }, [value]);

  return (
    <form>
      <input
        type="search"
        placeholder="Your city"
        className="h-10 w-96 outline-none rounded-2xl pl-14 pr-6"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && (
        <div
          className={`w-96 max-h-96 absolute z-10 bg-[#bbd7ec] ${
            value === "" ? "" : "border-4 border-[#7ab1da]"
          } rounded-2xl mt-3 overflow-y-auto`}
        >
          {value !== "" && suggestions.length === 0 && (
            <p className="ml-3 my-2">{value} not found</p>
          )}
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-3"
              onClick={(e) => {
                e.preventDefault();
                searchFunctionality();
              }}
            >
              <div
                className="bg-[#aecadf] rounded-lg px-3 hover:bg-[#f2fbff]"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <p className="text-lg font-semibold cursor-pointer">
                  {suggestion}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
