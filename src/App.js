import './App.css';
import React, { useEffect, useState } from 'react';
import Weather from './Weather';
import { Dimmer, Loader } from 'semantic-ui-react';

function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const weatherData = {
    clouds: {all:75},
    main: {
      temp: 25.09, feels_like: 25.95, temp_min: 25.09, temp_max: 25.09, pressure: 1007, humidity: 88
    },
    name: "Indore",
    sys: {type: 1, id: 9067, country: 'IN', sunrise: 1689207559, sunset: 1689255884},
    timezone: 19800,
    visibility: 4000,
    weather: [{id: 721, main: 'Haze', description: 'haze', icon: '50d'}],
    wind:{speed:3.6,"deg":160}
  }

  

  useEffect(()=> {
    // const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
  
    //   await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    //   .then(res => res.json())
    //   .then(result => {
    //     setData(result)
    //     console.log(result);
    //   });
    // }
    // fetchData();
    setData(weatherData);
  }, [lat, long]);


  return (
    <div className="App">
      {
        (typeof data.main === 'undefined')
        ? (<Weather weatherData={data}/>)
        : (<div><Dimmer active><Loader><h1>Loading...</h1></Loader></Dimmer></div>)
      }
    </div>
  );
}

export default App;
