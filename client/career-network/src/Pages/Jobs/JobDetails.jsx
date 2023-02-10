import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdOutlineDescription } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { BsCalendarDate } from 'react-icons/bs';
import { FiClock } from 'react-icons/fi';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData()
    const { _id, job_title, duty_hours, location, salary, skills, experience, deadline, description, jobSummary } = data
    const [apply, setApply] = useState(0)
    const [saveJob, setSaveJob] = useState(0)
    // const descrip = description.split('.')
    // console.log(descrip)
    const handleApply = () => {
        setApply(1)
        toast.success('Apply Success')
    }
    const handleSaveJob = () => {
        setSaveJob(1)
        toast.success('Saved')
    }
    const handleUnSaveJob = () => {
        setSaveJob(0)
        toast.info('Saved')
    }
    return (
        <div className='m-10'>
            <section className=' lg:grid grid-cols-4 gap-6'>
                {/* description */}
                <div className='col-span-3'>
                    <h1 className='text-2xl font-bold mb-2 text-green-700'>{job_title}</h1>
                    <h1 className='text-lg font-bold mb-4'>Company Name </h1>

                    <div className='flex items-center' >
                        <MdOutlineDescription />
                        <h2 className='ml-1 text-lg font-bold'> Job Summary</h2>
                    </div>
                    <div className="divider"></div>
                    <p className='mb-6'>{jobSummary}</p>
                    <div className='flex items-center' >
                        <MdOutlineDescription />
                        <h2 className='ml-1 text-lg font-bold'> Job Responsibility</h2>
                    </div>
                    <div className="divider"></div>
                    <p>Description : {description }</p>
                    <p className='font-bold text-lg mt-4'>Job Location</p>
                    <div className='flex items-center pl-2'>
                        <GoLocation />
                        <p>{location}</p>
                    </div>
                    <h1 className='text-lg font-bold ml-1 mt-6'>Employment Status</h1>
                    <div className='flex items-center pl-3 '>
                        <FiClock />
                        <p className='pl-1'>{duty_hours}</p>
                    </div>


                    <h1 className='text-lg font-bold ml-1 mt-6'>Experience Requirements</h1>
                    <div className='flex items-center pl-3 '>
                        <FiClock />
                        <p className='pl-1'>At most {experience} {experience > 1 ? ' years' : ' year'} </p>
                    </div>
                    <h1 className='text-lg font-bold mt-6'>Salary</h1>
                    <p className='pl-3'>{salary}</p>
                    <h1 className='text-lg font-bold ml-1 mt-6'>Last Date of Apply</h1>
                    <div className='flex items-center pl-3 '>
                        <BsCalendarDate />
                        <p className='pl-1'>{deadline} </p>
                    </div>
                </div>
                <div className='mt-10 h-64 lg:bg-[#F5F5F5]'>
                    <div className='bg-black text-white h-10 p-3 rounded-md rounded-b-none font-semibold hidden lg:block'>
                        <p >Job Summary</p>
                    </div>
                    <div className='text-sm mt-2 dark:text-green-800 p-3 hidden lg:block'>

                        <p className='mb-2'><span className='font-bold '>Published on :</span> 18 Jan 2023</p>    {/*  dynamic*/}
                        <p className='mb-2'><span className='font-bold '>Vacancy :</span> 2</p>
                        <p className='mb-2'><span className='font-bold '>Employment Status :</span> {duty_hours}</p>
                        <p className='mb-2'><span className='font-bold '>Experience :</span> {experience}</p>
                        <p className='mb-2'><span className='font-bold '>Job Location :</span> {location}</p>
                        <p className='mb-2'><span className='font-bold '>Application Deadline :</span> {deadline}</p>

                    </div>
                   { apply===0 ?  <button onClick={handleApply} className='bg-green-600 rounded-md h-10 w-full mt-8 text-center text-white font-bold'>Apply</button>: <button className='bg-green-200 disabled rounded-md h-10 w-full mt-8 text-center text-green-800 font-bold'>Application sent successfully</button>}
                {
                    saveJob===0?     <button onClick={handleSaveJob} className='bg-black dark:bg-stone-600 rounded-md h-10 w-full mt-2 text-center text-white font-bold'>Save</button>:<button onClick={handleUnSaveJob} className='bg-gray-600 rounded-md h-10 w-full mt-2 text-center text-white font-bold'>Unsave</button>
                }


                </div>

            </section>
        </div>
    );
};

export default JobDetails;