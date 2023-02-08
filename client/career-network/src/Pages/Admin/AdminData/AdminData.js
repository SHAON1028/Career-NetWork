import React from 'react'
import { Link } from 'react-router-dom'

function AdminData() {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center bg-sky-800 font-besicFont text-white">
      <div className='text-center md:w-8/12 w-10/12'>
          <h2 className='text-5xl font-bold capitalize '>admin dashbord direction</h2>
          <p className='my-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          <div className='gap-3  flex justify-center items-center'>
            <Link to={'/admin/recruiter'}><button className='btn btn-primary'>recruite</button></Link>
            <Link to={"/admin/jobseerker"}><button className='btn btn-secondary'>job seeker</button></Link>
            <Link to={"/admin/admintable"}><button className='btn-primary btn'>admin</button></Link>
          </div>
      </div>
    </div>
  )
}

export default AdminData