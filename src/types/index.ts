interface Coord {
  lat: number;
  lon: number;
}

interface City {
  coord: Coord;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

interface Clouds {
  all: number;
}

interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}
interface Sys {
  pod: string;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface Wind {
  deg: number;
  gust: number;
  speed: number;
}

interface List {
  clouds: Clouds;
  dt: number;
  dt_txt: string;
  main: Main;
  pop: number;
  sys: Sys;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

export interface IData {
  city: City;
  cnt: number;
  cod: string;
  list: List[];
  message: number;
}

export interface IApiData {
  data: IData;
}

export interface IProps {
  setBiggestCitiesList?:
    | React.Dispatch<React.SetStateAction<string[]>>
    | undefined;
  setCity: (value: string) => void;
  setUnits: (value: string) => void
  units: string
}

export interface IFormatDateTime {
  dayOfWeek: string;
  time: string;
}

export interface IFormatSunriseSunsetTime {
	sunDayOfWeek: string
	sunTime: string
}

export interface INavBarProps {
  biggestCitiesList: string[]
  setCity: (value: string) => void;
}
