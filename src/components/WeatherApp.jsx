import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import clearBg from "../assets/clearBg.jpg"
import cloudBg from "../assets/Cloud.jpg"
import rainyBg from "../assets/rainy.jpg"
import thunderBg from "../assets/thunder.jpg"
import winterBg from "../assets/winter.jpg"
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

    const getBackground =() =>{
        switch (weather.main){
            case "Rain":
                return rainyBg;
                case "Snow":
                    return winterBg;
                    case "Clouds":
                        return cloudBg;
                        case "Thunderstorm":
                            return thunderBg;
                            default:
                                return clearBg;
        }
    }
    
    return(<div style={{
       
      height: "100vh",
      margin: 0,
      width: "100%" ,
      backgroundImage: `url(${getBackground()})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

    }}>
        <SearchBox AllDetails={setAllDetails} />
        <InfoBox Details={weather} />
    </div>)
}