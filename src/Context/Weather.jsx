
import { getWeatherDataForCity } from "../API";
import { createContext, useCallback, useContext , useState} from "react";
const WeatherContext= createContext(null);

export const useWeather= ()=>{
    return useContext(WeatherContext);
};

export const WeatherProvider=(props)=>{
    const[data,setData] =useState(null);
    const [searchcity, setSearchCity] = useState(null);


    const fetchData= async ()=>{
        const response= await getWeatherDataForCity(searchcity);
        setData(response);
    }
    return(
        <>
        <WeatherContext.Provider value={{setSearchCity, searchcity, fetchData, data}}>
            {props.children}
        </WeatherContext.Provider>
        </>
    )
};