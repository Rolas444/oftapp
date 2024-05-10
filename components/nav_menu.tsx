'use client'

import { MenuItem } from "@/interfaces/menu";
import { useRouter } from "next/navigation";



const NavMenu =({menuItems}: {menuItems: MenuItem[]})=>{
    
    const router = useRouter();


    const navigate = (path: string)=>{
        router.push(path);
    }

    return(
        <nav>
            <ul className="flex space-x-4">
                {menuItems.map((item,index)=>(
                    <li key={index}>
                        <div onClick={()=>navigate(item.path)} className="cursor-pointer font-bold">
                            {item.name}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavMenu