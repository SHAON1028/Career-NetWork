import React, { useContext, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { onclickdrawerbutton } from '../../app/EmployeSlice/EmployeSlice'
import { AuthContext } from '../../Context/AuthProvider'

function EmployeeDeshbordNavbar() {
  // state context
    const [menu, setMenu] = useState(true)
    const {state} = useSelector(store=>store.counter)
    const dispatch = useDispatch()
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    // navbar list item 
    const navItems =<>
        <li className={`listItem`}><Link to="/employedeshbord" className=''>deshbord</Link></li>
        <li className={`listItem ${menu ? "text-black" : "text-white"}`}><Link to={"/employedashboard/resumemanager"}>Resume</Link></li>
        <li className={`listItem ${menu ? "text-black" : "text-white"}`}><Link to={'/employedashboard/employejobs'}>jobs</Link></li>
        <li className={`listItem ${menu? "text-black": "text-white"}`}><Link to={"/employedashboard/myaccount"}>account</Link></li> 
        {user?.uid ? <>
            <li className={`listItem ${state ? "text-black" : "text-white"}`}><Link onClick={handleLogOut}>Logout</Link></li>
        </> : <>
                <li className={`listItem ${menu ? "text-black" : "text-white"}`}><Link to='/login'>Login</Link></li>
            </>
        }
        <li><img className='h-10 w-10 bg-black rounded-full' src="" alt="" /></li>
    </>

    // navbar start hare
    return (
      <div className='h-16 sticky top-0'>
            <div className={`navbar max-w-[1440px] mx-auto s backdrop-blur-3xl z-20 top-0 lg:bg-transparent lg:text-black ${menu?'bg-transparent text-black duration-200 ease-in':'bg-sky-800 text-slate-200 duration-200 ease-out'}  px-4`}>
                <div className="navbar-start">
                    <Link to={'/'} className="btn btn-ghost normal-case font-bold text-2xl font-besicFont ">Career Network</Link>
                </div>
                <div className='navbar-end'>
                    <div className="">
                        <label onClick={()=>dispatch(onclickdrawerbutton())} className="btn btn-ghost lg:hidden">
                            <i className=''>{menu ? <FiMenu className='text-3xl'></FiMenu> : <RxCross1 className='text-3xl '></RxCross1>}</i>
                        </label>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="text-xl font-medium flex items-center capitalize">
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
)}

export default EmployeeDeshbordNavbar