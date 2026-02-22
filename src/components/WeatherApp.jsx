import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
export default function WeatherApp(){
    let [weather , setWeather] = useState({
        
        City: 'Gwalior',
        Temp: 40.01,
        min : 22.05,
        max : 42,
        humaditiy : 50,
        Feels_Like : 27.01,
        pressure : 1010,

    })

    let setAllDetails = (newResult)=>{
        setWeather(newResult);
    }
    
    return(<div>
        <SearchBox AllDetails={setAllDetails} />
        <InfoBox Details={weather} />
    </div>)
}