import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";
import './InfoBox.css'
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';



export default function InfoBox({Details}){
let [displayTemp, setDisplayTemp] = useState(0);

     useEffect(() => {
            let start = 0;
            let end = Details.Temp;
            let duration = 800; // 0.8 second
            let increment = end / (duration / 16);

            let counter = setInterval(() => {
                start += increment;

                if (start >= end) {
                    start = end;
                 clearInterval(counter);
                 }

            setDisplayTemp(start.toFixed(1));
          }, 16);

         return () => clearInterval(counter);
        }, [Details.Temp]);
    
    const getIcon = () =>{
      switch (Details.main){
        case "Rain":
          return <WaterDropIcon className='rain-drop' sx={{fontSize: 30 , color: "rgb(56, 167, 177)"}}/>;
          case "Thunderstorm":
            return <ThunderstormIcon className='thunder-flash' sx={{fontSize: 30}}/>;
            case "Clouds":
              return <CloudIcon className='cloud-float' sx={{fontSize: 30}}/>;
              case "Snow":
                return <AcUnitIcon sx={{fontSize: 30}}/>;
                default:
                  return <SunnyIcon className='sun-rotate' sx={{fontSize: 30 , color: "gold"}}/>
      }
    }

    return(
    <div className='infoBox'>
            <Card sx={{  width: 320,
                minHeight: 360,    
                backgroundColor: "rgba(255, 255, 255, 0.22)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(20px)",
                color: "white",
                borderRadius: 6,
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.45)",
                mt: "37px",
                py: 4,
                px: 5,
                transition: "0.4s ease",
              "&:hover": {
                  transform: "translateY(-9px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
                }
            }}>
      
      <CardContent sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h5" sx={{ opacity: 0.9 }}>
          {Details.City}&nbsp;{getIcon()}
        </Typography>
        
        <Typography variant="h2" component="div" sx={{
           my: 2,
           letterSpacing: 2,
           fontWeight: "bold",
           transition: "all 0.3s ease"
        }}>
         {displayTemp}°C
         </Typography>
         <hr></hr>
         <div  style={{
               display: "grid",
               gridTemplateColumns: "1fr 1fr",
               gap: "10px",
               marginTop: "15px",
               fontSize: "18px"
            }} >
              <Typography sx={{ opacity: 0.8 }} fontWeight={500}>Humidity</Typography>
                <Typography sx={{ fontWeight: 600 }}>{Details.humaditiy}&nbsp;%</Typography>

              <Typography sx={{ opacity: 0.8 }} fontWeight={500}>Min Temp</Typography>
                <Typography sx={{ fontWeight: 600 }}>{Details.min}&nbsp;°C</Typography>

              <Typography sx={{ opacity: 0.8 }} fontWeight={500}>Max Temp</Typography>
               <Typography sx={{ fontWeight: 600 }}>{Details.max}&nbsp;°C</Typography>

              <Typography sx={{ opacity: 0.8 }} fontWeight={500}>Feels Like</Typography>
                <Typography sx={{ fontWeight: 600 }}>{Details.Feels_Like}&nbsp;°C</Typography>

              <Typography sx={{ opacity: 0.8 }} fontWeight={500}>Pressure</Typography>
                <Typography sx={{ fontWeight: 600 }}>{Details.pressure}&nbsp;hPa</Typography>
         </div>
        
      </CardContent>
      
    </Card>
  </div>)
}