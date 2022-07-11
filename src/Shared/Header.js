import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenuFold} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleNavOpen = () =>{
        setOpen(!open)
    }
  return (
    <header className='bg-slate-400 fixed w-full z-10 h-16 flex justify-between items-center px-10'>

        {/* Logo section */}
        <h1 className='text-3xl font-bold'>Router.6</h1>

        {/* Navigation Section */}
        <ul className='hidden md:flex space-x-6 font-semibold text-xl'>

            <Link to='/' className='hover:text-slate-500 duration-300'>Home</Link>

            <Link to='/about' className='hover:text-slate-500 duration-300'>About</Link>

            <Link to='/posts' className='hover:text-slate-500 duration-300'>Posts</Link>

            <Link to='/friends' className='hover:text-slate-500 duration-300'>Friends</Link>
        </ul>

        {/* Icon section */}
        <div onClick={handleNavOpen}className='md:hidden text-slate-500 cursor-pointer'>
            {
                (!open) ? <AiOutlineMenuFold size={25}/> : <AiOutlineClose size={25}/>
            }
            
        <ul className={(!open) ? 'hidden' : 'absolute font-semibold top-16 left-0 px-10 bg-blue-400 w-full z-10 h-screen flex flex-col text-lg py-4 text-center uppercase'}>

            <Link to='/' className='hover:text-pink-500 duration-300'>Home</Link>

            <Link to='/about' className='hover:text-pink-500 duration-300 py-2'>About</Link>

            <Link to='/posts' className='hover:text-pink-500 duration-300 py-2'>Post</Link>

            <Link to='/friends' className='hover:text-pink-500 duration-300'>Friends</Link>
        </ul>
            
        </div>
    </header>
  )
}

export default Header