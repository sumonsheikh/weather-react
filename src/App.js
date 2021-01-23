
import React, {useState} from 'react';
const api = {
  key: "0608b08c2f685a3d3300ac788c756458",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState(' ');
  const [weather, setWeather] = useState({});
  const search = (e)=>{
    if(e.key === 'Enter'){
      fetch(`${api.base}weather?q=${weather}&units=metric&APPID=${api.key}`)
      .then((res)=>res.json())
      .then((result) =>{
        setWeather(result)
        setQuery(' ')
      });
    }
  } 
  const dateBuilder = (d) =>{
    let months = [ "January", "February", " March", "April", "May", "June", " July", "August", 
    "September", "October", "November", "December"];
    let days      = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", " Friday", "Saturday"];

    let day       = days[d.getDay()];
    let date      = d.getDate();
    let month  = months[d.getMonth()];
    let year      = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  }
  return (
    <div className="app ">
        <main>
            <div className=" search-box">
              <input
                type="text"
                className="search-field"
                placeholder="serche..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
                />
            </div>
            <div className="location-box">
              <div className="location">Dhaka, Bangladesh</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">15°c</div>
              <div className="weather">Sunny</div>
            </div>
        </main>
    </div>

  )
}

export default App;
