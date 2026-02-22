import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';


export default function InfoBox({Details}){

    
    const getIcon = () =>{
      switch (Details.main){
        case "Rain":
          return <WaterDropIcon sx={{fontSize: 30 , color: "blue"}}/>;
          case "Thunderstorm":
            return <ThunderstormIcon sx={{fontSize: 30}}/>;
            case "Clouds":
              return <CloudIcon sx={{fontSize: 30}}/>;
              case "Snow":
                return <AcUnitIcon sx={{fontSize: 30}}/>;
                default:
                  return <SunnyIcon sx={{fontSize: 30 , color: "gold"}}/>
      }
    }

    return(
    <div className='infoBox'>
            <Card sx={{ maxWidth: 390,
                backgroundColor: "rgba(255, 254, 254, 0.34)",
                border: "2px solid rgba(254, 254, 254, 0.39)",
                backdropFilter: "blur(20px)",
                color: "white",
                borderRadius: 6,
                mt: "20px",
                py: 2,
                px: 7,
             }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Details.City} <span style={{marginLeft: "20px" }}>{getIcon()}</span>
        </Typography>
        
        <Typography variant="h2" component="div" sx={{
            my: 2,
            letterSpacing: 2,
            fontWeight: "bold"
        }}>
         {Details.Temp}°C
         </Typography>
         <hr></hr>
         <div  style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
              marginTop: "20px"
            }} >
            <div>Humidity:</div>
            <div>{Details.humaditiy}&nbsp;%</div>
            <div>Min Temp:</div>
            <div>{Details.min}&nbsp;°C</div>
            <div>Max Temp:</div>
            <div>{Details.max}&nbsp;°C</div>
            <div>Feels like:</div>
            <div>{Details.Feels_Like}&nbsp;°C</div>
            <div>Pressure:</div>
            <div>{Details.pressure}</div>
         </div>
        
      </CardContent>
      
    </Card>
    </div>)
}