import React, { useState, useContext, useEffect } from "react";

function Clock(){

  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  
  useEffect(() => {
    let interval = null;
    
      interval = setInterval(() => {
        if(segundos < 60){
          setSegundos(segundos => segundos + 1);
        }
        else{
          setSegundos(0)
          if(minutos < 60){
            setMinutos(minutos => minutos + 1);
          } 

          else{
            setSegundos(0);
            setMinutos(0);
            setHoras(horas => horas + 1);
          }
        }
      }, 1);
    
    return () => clearInterval(interval);
  });

  
  return (
    <div>
      <h1>{horas}:{minutos}:{segundos}</h1>
    </div>
  );
}

export default Clock;