import React from 'react';
import { useContext } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext)
    const profile = useLoaderData()
    console.log(profile);
    return (
        <div className='flex justify-center'>
            <div className='flex justify-center w-[600px] shadow-lg p-10'>
                <div className='grid grid-cols-1 gap-y-6'>
                    <div className='flex justify-between'>
                        <img className='w-36 rounded-full' src={profile?.phone} alt="" />
                        <FaEdit></FaEdit>
                    </div>
                    <div className='divider'></div>
                    <div>
                        <h2 className="text-md font-semibold">Name: {profile.name}</h2>
                    </div>
                    <div className='divider'></div>

                    <div>
                        <h2 className="text-md font-semibold">Email: {profile.email}</h2>
                    </div>
                    <div className='divider'></div>

                    <div>
                        <h2 className="text-md font-semibold">Address: {profile.address}</h2>
                    </div>
                    <div className='divider'></div>
                    <div>
                        <h2 className="text-md font-semibold">Profession: {profile.skills}</h2>
                    </div>
                    <div className='divider'></div>

                    <div>
                        <h2 className="text-md font-semibold">Skills: {profile.skills}</h2>
                    </div>
                    <div className='divider'></div>

                    <div>
                        <h2 className="text-md font-semibold">Phone: {profile.experience}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;