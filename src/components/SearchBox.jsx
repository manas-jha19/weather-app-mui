import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function SearchBox({AllDetails}){
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);
    let [loading , setLoading] = useState(false);

    const Api_key = import.meta.env.VITE_WEATHER_API_KEY
    const Api_url = import.meta.env.VITE_WEATHER_API_URL
  
       
        let getApi = async()=>{
            try{
        let response = await fetch(`${Api_url}?q=${city}&appid=${Api_key}&units=metric`);
        let Jsonresponse = await response.json();
        console.log(Jsonresponse);

        let result ={
            City : Jsonresponse.name,
            Feels_Like: Jsonresponse.main.feels_like,
            Temp : Jsonresponse.main.temp,
            max : Jsonresponse.main.temp_max,
            min : Jsonresponse.main.temp_min,
            humaditiy : Jsonresponse.main.humidity,
            description : Jsonresponse.weather[0].description,
            main : Jsonresponse.weather[0].main,
            pressure : Jsonresponse.main.pressure

        }
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
        
    }
    

      let SubmitForm = async(event)=>{
        try{
             setError(false);
            setLoading(true);  
         event.preventDefault();
         setCity('')
         let info = await getApi();
         AllDetails (info);
        }catch(err){
            setError(true);
        }finally{
            setLoading(false);
        }
        
      }
    

     return(
    <div>
    <form onSubmit={SubmitForm}  style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <TextField id="city" label="Search city" value={city} onChange={(e)=>setCity(e.target.value)} variant="outlined" required 
        sx={{
          width: "280px",
          background: "rgba(255,255,255,0.35)",
          borderRadius: 2,
          backdropFilter: "blur(10px)"
        }} />
        <br></br><br></br>
        <Button variant="contained" type='submit' 
        sx={{
          borderRadius: 3,
          fontWeight: "bold",
          px: 4,
          py: 1,
          boxShadow: "0 6px 18px rgba(0,0,0,0.4)"
        }} >Search</Button>
        {error && <p style={{color:"red"}}>No such as city</p>}
        {loading && (
     <CircularProgress
            size={30}
            sx={{ color: "white", mt: 2 }}
     />
)}
    </form>
    </div>)
}