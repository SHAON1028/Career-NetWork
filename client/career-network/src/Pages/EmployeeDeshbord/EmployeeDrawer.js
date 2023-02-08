import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { onEmployeDrawerClick } from '../../app/EmployeSlice/EmployeSlice'

function EmployeeDrawer() {
    const dispatch = useDispatch()
    const navbar = [
        {name:"slider-1",send:"/employedashboard/resumemanager"},
        {name:"slider-2",send:""}
    ]
  return (
    <div className=''>
        <div className="">
            <div className="font-besicFont text-white">
                <div className='h-16 flex justify-between items-center pl-6 pr-12'>
                    <h1 className='text-2xl'>Career network</h1>
                    <button onClick={()=>dispatch(onEmployeDrawerClick())} className='text-2xl'><RxCross1 className='sm:hidden'/></button>
                </div>
                <ul className="menu p-4 text-white">
                    {navbar.map((item, i)=>(
                        <li key={i} onClick={()=>dispatch(onEmployeDrawerClick())} className="border-b-2 hover:bg-sky-800 hover:rounded-lg duration-150">
                            <Link to={item.send}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default EmployeeDrawer