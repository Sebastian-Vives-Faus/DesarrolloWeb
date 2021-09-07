import React from "react";
import Users from "../components/Users";
import { useParams } from "react-router";
import HomeButton from "../components/BackButton";

export default function UserRoute() {
    
    const { id } = useParams();

    return (
        <div>
            <HomeButton/>
            <h1>Ejercicio {id}</h1>
            <Users/>
        </div>
    )
}