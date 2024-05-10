'use client'
import { getPersons } from "@/api/api";
import { Persona } from "@/interfaces/personas";
import { useEffect, useState } from "react";

const PersonasPage = () => {

    const [personas, setPersonas] = useState<Persona[]>([]);

    const cargaData = async ()=>{
        setPersonas(await  getPersons());
    }

    useEffect(()=>{
        cargaData();
    },[])

    useEffect(()=>{
        // if(personas.length > 0){
            console.log(personas);
        // }
    },[personas])

    return (
        <div>
        <h1>Personas</h1>
        </div>
    );
}

export default PersonasPage;
