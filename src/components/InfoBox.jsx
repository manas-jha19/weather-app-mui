import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './InfoBox.css'


export default function InfoBox({Details}){

    


    return(
    <div className='infoBox'>
            <Card sx={{ maxWidth: 390,
                backgroundColor: "rgba(8, 8, 8, 0.34)",
                border: "2px solid rgba(8, 8, 8, 0.11)",
                color: "white",
                borderRadius: 6,
                mt: "20px",
                py: 2,
                px: 7,
             }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Details.City}
        </Typography>
        <Typography variant="h2" component="div" sx={{
            my: 2,
            letterSpacing: 2
        }}>
         {Details.Temp}
         </Typography>
         <hr></hr>
         <div  style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
              marginTop: "20px"
            }} >
            <div>Humidity:</div>
            <div>{Details.humaditiy}</div>
            <div>Min Temp:</div>
            <div>{Details.min}</div>
            <div>Max Temp:</div>
            <div>{Details.max}</div>
            <div>Feels like:</div>
            <div>{Details.Feels_Like}</div>
            <div>Pressure:</div>
            <div>{Details.pressure}</div>
         </div>
        
      </CardContent>
      
    </Card>
    </div>)
}