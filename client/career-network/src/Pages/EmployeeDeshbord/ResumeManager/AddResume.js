import React, { useState } from 'react'
import { useContext } from 'react';
import { FileUploader } from 'react-drag-drop-files'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

function AddResume() {
    const navigate = useNavigate()
    const {user}=useContext(AuthContext)
    const [error ,setError]=useState(null)
    const fileTypes = ["PDF"];
    const fileType = ["application/pdf"]
    const handleData = async(file) => {
        if(file && fileType.includes(file.type)){
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend =(e)=>{
                const userData = {
                    email:user?.email,
                    resume:e.target.result
                    }
                    fetch("http://localhost:5000/addresume",{
                        method:"PUT",
                        headers:{
                            "content-type":"application/json"
                        },
                        body:JSON.stringify(userData)
                    })
                    .then(res => res.json())
                    .then(item=>{
                        if(item?.acknowledged){
                            toast.success("add successfully")
                            navigate("/employedashboard/resumemanager")
                        }
                    })
            }
        }
        else{
            setError("please add PDF file")
        }
    }
  return (
    <div>
        <div className='min-h-screen overflow-hidden -z-50 bg-sky-800 text-white'>
            <div>
                <div className='text-center mt-16'>
                    <h2 className='text-6xl capitalize font-semibold'>add you resume or cv</h2>
                </div>
                <FileUploader className="-z-50" handleChange={handleData} name="file" types={fileTypes} >
                    <div className={`lg:h-72 h-60 -z-50 flex justify-center items-center flex-col outline-dashed my-10 lg:mx-10 mx-6 bg-slate-300`}> 
                        <h2 className='text-5xl capitalize font-bold mb-2'>drag & drop</h2>  
                        <p>please only pdf file upload</p>
                    </div>
                    <div className='lg:mx-10 mx-6 mb-10'>
                        <button className='btn btn-secondary w-40'>add resume</button>
                    </div>
                </FileUploader>
            </div>
            <p>{error}</p>
        </div>
    </div>
  )
}

export default AddResume