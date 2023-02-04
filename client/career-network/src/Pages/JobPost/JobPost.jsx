import React from 'react';

const JobPost = () => {
    return (
        <div className='shadow-lg shadow-slate-500 rounded-md py-10 w-11/12 mx-auto'>
            <h2 className='text-4xl text-center font-bold font-secondaryFont'>Get it to your job</h2>
            <p className='text-center my-4 font-besicFont text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione <br /> veniam dignissimos officiis magnam vel! Dolorum maiores quos autem dolores qui?</p>
            <div className='flex justify-center gap-x-4'>
                <input className='btn w-28 border-none bg-gray-500 hover:bg-gray-500' type="submit" value="Post A Job" />
                <input className='btn w-28 border-none bg-green-400 hover:bg-green-400' type="submit" value="Search" />
            </div>
        </div>
    );
};

export default JobPost;