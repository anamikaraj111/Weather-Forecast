
import { useWeather } from '../Context/Weather';
import React from 'react';
const Input=()=>{

    const weather= useWeather();
    console.log('weather');
    return(
        <>
        <input 
        className='input'
        placeholder= "search-here"
        value= {weather.searchcity}
         onChange={(e)=> weather.setSearchCity(e.target.value)} 
        />
        </>
    )
}
export default Input;