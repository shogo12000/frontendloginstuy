import { useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { Navigation } from "../navigation/Navigation";



export const Home = ()=>{
    return (
        <div className="border-2 flex flex-col w-full h-screen">
            <Navigation /> 
             <Outlet/>
             <h1  className="text-3xl">footer</h1>
        </div>
    )
}