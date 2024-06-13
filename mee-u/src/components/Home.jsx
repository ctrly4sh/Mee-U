import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <p className="text-4xl bg-orange-500 ">Mee-U , Lets Video chat !!!! </p>
            <Link to="/call"> Create a  Call </Link>
        </div>
    )
}