

const baseUrl=
"https://api.weatherapi.com/v1/current.json?key=c2e84d28dbba40da9f8102421261410";

export const getWeatherDataForCity= async (city)=>{
    const response= await fetch(`${baseUrl}&q= ${city}&aqi=yes`);
    return await response.json();

};