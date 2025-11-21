import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { IoSearchSharp } from "react-icons/io5";

const NavBar = () => {

    const [isMenuOpen,setMenuOpen] = useState(false)

    const openMenu = () => setMenuOpen(true)
    const closeMenu = () => setMenuOpen(false)

    const [query, setQuery] = useState("")
    
    return (
        <>
        <header className='w-full fixed top-0 left-0 z-50'>
            <div className='hidden lg:block p-8'>
                <div className='flex justify-between items-center shadow-lg bg-amber-400 p-5 rounded-lg'>
                    <div>
                        <h1 className='font-bold text-2xl'>ZNX-JX</h1>
                    </div>
                    <nav>
                        <ul className='flex gap-6'>
                            <li className='hover:underline font-bold'><Link to="/">Home</Link></li>
                            <li className='hover:underline font-bold'><Link to="/about">About</Link></li>
                            <li className='hover:underline font-bold'><Link to="/texttools">TextTools</Link></li>
                            <li className='hover:underline font-bold'><Link to="/blog">Blog</Link></li>
                        </ul>
                    </nav>
                    <section className='relative'> 
                        <div className='flex items-center gap-3 border-2 rounded-2xl px-3 py-2 '>
                            <IoSearchSharp className='text-black' />
                            <input type="text" placeholder='search' value={query} onChange={(e) => setQuery(e.target.value)} className='outline-0' /> 
                        </div>
                    </section>
                    <button className='bg-black text-white px-3 py-2 rounded-lg cursor-pointer'>Contact Us</button>          
                </div>
            </div>

            <div className='block lg:hidden p-5'>
                <div className='bg-amber-400 flex justify-between items-center p-3 rounded-lg'>
                        <h1 className='font-bold text-2xl'>ZNX-JX</h1>
                        <Menu onClick={openMenu} />  
                </div>
                <div className={`${isMenuOpen ? 'left-0' : 'left-full'} duration-300 absolute inset-0 p-6 h-screen bg-amber-400`}>
                    <div className='flex justify-between'>
                        <h1 className='font-bold text-2xl'>ZNX-JX</h1>
                        <X onClick={closeMenu} />
                    </div>
                    <nav>
                        <ul className='flex-col space-y-5 mt-6'>
                            <li className='hover:underline text-xl'><Link onClick={closeMenu} to="/">Home</Link></li>
                            <li className='hover:underline text-xl'><Link onClick={closeMenu} to="/about">About</Link></li>
                            <li className='hover:underline text-xl'><Link onClick={closeMenu} to="/texttools">TextTools</Link></li>
                            <li className='hover:underline text-xl'><Link onClick={closeMenu} to="/blog">Blog</Link></li>
                        </ul>
                    </nav> 
                </div>
            </div>
        </header>
        </> 
    );
};

export default NavBar;