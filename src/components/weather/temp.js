import React,{useEffect,useState} from 'react';
import "./style.css";
import WeatherCard from './WeatherCard';


const Temp = () => {
  const[searchValue,setSearchValue]=useState("Tripura");
  const[weatherInfo,setWeatherInfo]=useState([]);
  const SearchData=async()=>{
    try{
      let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d73cd202d99f9d1bda2eb2b6db78cc65`;
      const res=await fetch(url);
      const data=await res.json();
      const {temp,humidity,pressure}=data.main;
      const {main: weathermood}=data.weather[0];
      const{name}=data;
      const{speed}=data.wind;
      const{country,sunset}=data.sys;
      const myNewWeatherInfo={
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,

      }
      setWeatherInfo(myNewWeatherInfo);

  }catch(error){
    console.log(error);
  }
    }
    
  useEffect(()=>{
    SearchData();
  },[])
  return (
    <>
      <div className="wrap">
        <div className="search">
            <input type='search'
            placeholder='search...'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            />
            <button className='searchButton' type='button' onClick={SearchData}>search</button>

        </div>
      </div>
      <WeatherCard weatherInfo = {weatherInfo}/>
      
    </>
  )
}

export default Temp;
