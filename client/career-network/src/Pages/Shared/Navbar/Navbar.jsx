import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import { BsMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';

import { useQuery } from 'react-query';
import { ThemeContext } from '../../../App';

const Navbar = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const { user, logOut ,menu,setMenu} = useContext(AuthContext)
 
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")

        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
     const { data:condition={} } = useQuery({
        queryKey: [user],
        queryFn:(async()=>{
            const res = await fetch(`http://localhost:5000/checkit?email=${user?.email}`)
            const data = await res.json()
            return data
        })
    })
    const navItems = <>
        {theme==='light'? <button onClick={handleTheme} className=' mt-1 text-md w-full'><li className={` listItem  ${menu ? 'text-black' : "text-white lg:text-black"}`}><BsMoonFill/></li></button>:<button onClick={handleTheme} className='mt-1 w-full text-md text-yellow-600 '><li className={` listItem ${menu ? 'text-black' : "text-white lg:text-black"}`}><BsFillSunFill/></li></button>}
        <Link to="/alljobs"><li className={`listItem ${menu ? 'text-black' : "text-white lg:text-black"} `}>Jobs</li></Link>
        <Link><li className={`listItem ${menu ? "text-black" : "text-white lg:text-black"} `}>Blogs</li></Link>
        <Link><li className={` listItem ${menu ? "text-black" : "text-white lg:text-black"}`}>About</li></Link>
        {user?.uid ? <>
            {condition?.role ==="recruiter" && <Link to={"/deshbord"}><li className={`listItem ${menu? "text-black dark:text-white": "text-white lg:text-black"} `}>Dashboard</li></Link>}
            {condition?.role === "seeker" && <Link to={"/employedeshbord"}><li className={`listItem ${menu ? "text-black" : "text-white lg:text-black"} `}>Dashboard</li></Link>}
            {condition?.role === "admin" && <Link to={"/admin"}><li className={`listItem ${menu ? "text-black" : "text-white lg:text-black"} `}>Dashboard</li></Link>}
            <Link onClick={handleLogOut}><li className={`listItem ${menu ? "text-black" : "text-white lg:text-black"} `}>Logout</li></Link>
        </> : <>
            <Link to='/login'><li className={`listItem ${menu ? "text-black" : "text-white lg:text-black"} `}>Login</li></Link>
            <Link to='/signup'><li className={`listItem ${menu ? "text-black" : "text-white"}`}>Signup</li></Link>
        </>

        }
    </>
    return (
        <div className={`relative h-16 `}>
            <div className={`navbar max-w-[1440px]  mx-auto backdrop-blur-3xl z-10 fixed top-0 lg:bg-transparent lg:text-black ${menu ? 'bg-transparent text-black duration-200 ease-in' : 'bg-sky-800 dark:bg-black text-slate-200 duration-200 ease-out'}  px-4 dark:text-white `}>
                <div className="navbar-start">
                    <Link to={'/'} className="btn btn-ghost normal-case font-bold text-2xl font-besicFont ">Career Network</Link>
                </div>
                <div className='navbar-end'>
                    <div className="dropdown">
                        <label onClick={() => setMenu(!menu)} className="btn btn-ghost lg:hidden">
                            <i className=''>{menu ? <FiMenu className='text-3xl'></FiMenu> : <RxCross1 className='text-3xl '></RxCross1>}</i>
                        </label>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="text-xl font-medium flex items-center justify-center">
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className={`w-full lg:hidden  z-10 top-16 fixed bg-sky-700 dark:bg-black backdrop-blur-3xl duration-1000 ${menu ? 'h-0 duration-1000 hidden' : " pb-10 duration-1000 block bg-sky-700"}`}>
                    <ul className='text-lg '>
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;