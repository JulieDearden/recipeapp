import React from "react"
import {Outlet, Link} from "react-router-dom"


export default function GuestLayout() {
  return (
    <>
      <div className="flex-col min-h-screen min-w-screen" style={{backgroundImage: `url('/recipes-spices.jpg')`, backgroundSize: "cover", backgroundAttachment: "fixed"}}>
     <header className="bg-black opacity-90 h-12 w-full flex justify-between items-center px-12 py-2">
            <div>
                <h1 className="text-xl text-white py-3">Logo</h1>
            </div>

            <ul className='flex items-center gap-4 text-white py-3'>
                <li>
                    <Link to="/">Recipes</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                
            </ul>
     </header>
     <div>
      <h1 className="flex text-white justify-center pt-8 text-6xl font-semibold">TastEscape</h1> 
      </div>
     <Outlet />
     </div>
     </>
  )
}