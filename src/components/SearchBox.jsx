import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function SearchBox({AllDetails}){
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);

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
         event.preventDefault();
         setCity('')
         let info = await getApi();
         AllDetails (info);
        }catch(err){
            setError(true);
        }
        
      }
    

     return(
    <div>
    <form onSubmit={SubmitForm}>
        <TextField id="city" label="Search city" value={city} onChange={(e)=>setCity(e.target.value)} variant="outlined" required sx={{label:{color:'black'},
        }} />
        <br></br><br></br>
        <Button variant="contained" type='submit' >Search</Button>
        {error && <p style={{color:"red"}}>No such as city</p>}
    </form>
    </div>)
}