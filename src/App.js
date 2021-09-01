//librerias ó components
import "./App.css";
import "./index.css";
import React, { useState, useContext, useEffect } from "react";


function App() {
  
  const [date, setDate] = useState(new Date());
  const [seconds, setSeconds] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  
  useEffect(() => {
    let interval = null;
    
      interval = setInterval(() => {
        if(seconds < 60){
          setSeconds(seconds => seconds + 1);
        }
        else{
          setSeconds(0)
          if(minutes < 60){
            setMinutes(minutes => minutes + 1);
          } 

          else{
            setSeconds(0);
            setMinutes(0);
            setHours(hours => hours + 1);
          }
        }
      }, 1);
    
    return () => clearInterval(interval);
  });

  
  return (
    <div>
      <h1>{horas}:{minutos}:{seconds}</h1>
      
      
    </div>
  );
}

export default App;