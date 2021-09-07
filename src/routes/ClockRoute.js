import React from "react";
import Clock from "../components/Clock";
import { useParams } from "react-router";
import HomeButton from "../components/BackButton";

export default function ClockRoute() {
    
    const { id } = useParams();

    return (
        <div>
            <HomeButton/>
            <h1>Ejercicio {id}</h1>
            <Clock/>
        </div>
    )
}