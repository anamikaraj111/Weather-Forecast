
import React from 'react';
import {useWeather} from '../Context/Weather';
const Card=()=>{
    const weather= useWeather();
    return(
        <>
        <div className='card'>
            <img src={weather.data?.current?.condition?.icon} alt="Weather icon" /> 
            <h2> {weather.data?.current?.temp_c ?? weather.data?.current?.temp ?? 'N/A'}°C </h2>
            <h2> {weather.data?.location?.name || 'N/A'} </h2>

        </div>
        
        </>
    )
}

export default Card;