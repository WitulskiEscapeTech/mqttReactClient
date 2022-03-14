import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar(){

    return(
        <ul class="grid grid-flow-col auto-cols-auto gap-4 place-items-center text-white">
            <li class="bg-black w-full text-center rounded-md"><Link to="/">Home</Link></li>
        </ul>
        
    )
}

export default NavBar;