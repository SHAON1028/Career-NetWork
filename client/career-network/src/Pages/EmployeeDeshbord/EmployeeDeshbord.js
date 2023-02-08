import React from 'react'
import EmployeeDeshbordNavbar from './EmployeeDeshbordNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import EmployeeDrawer from './EmployeeDrawer'
import { useDispatch, useSelector } from 'react-redux'
import { onEmployeDrawerClick } from '../../app/EmployeSlice/EmployeSlice'

function EmployeeDeshbord() {
  const {state} = useSelector(store=>store.counter)
  const dispatch = useDispatch()
  return (
      <div className='flex h-screen relative'>
          <div className={`lg:w-80 md:w-80 sm:w-72 w-full h-screen left-0 z-20 lg:static fixed lg:duration-75 duration-300 transition-transform lg:translate-x-0 ${state?"translate-x-0  ease-in ": " ease-out -translate-x-full "} bg-slate-800`}>
              <EmployeeDrawer></EmployeeDrawer>
          </div>
          <div className='w-full overflow-y-scroll'>
              <EmployeeDeshbordNavbar></EmployeeDeshbordNavbar>
                <div onClick={()=>dispatch(onEmployeDrawerClick())} className='mx-8'>
                    <Outlet></Outlet>
                </div>
              <Footer></Footer>
          </div>
    </div>
  )
}

export default EmployeeDeshbord