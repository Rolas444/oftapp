'use client'
import { getPersons } from "@/api/api";
import MainTable from "@/components/main_table";
import { Persona } from "@/interfaces/personas";
import { useEffect, useState } from "react";



const PersonasPage = () => {

    const [personas, setPersonas] = useState<Persona[]>([]);

    const columns = [
        {
            accessorKey: 'DocNumber',
            header: ()=><span>Doc. Identidad</span>
        },
        {
            accessorKey: 'Name',
            header: ()=><span>Nombres</span>
        },
        {
            accessorKey: 'MiddleName',
            header: ()=><span>Ap. Paterno</span>
        },
        {
            accessorKey: 'LastName',
            header: ()=><span>Ap. Materno</span>
        },
    ]

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
        <div className="w-full">
            <MainTable<Persona> data={personas} columns={columns}  />
        </div>
        </div>
        
    );
}

export default PersonasPage;
