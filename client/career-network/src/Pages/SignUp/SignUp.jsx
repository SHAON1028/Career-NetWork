import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../others/Hooks/useToken';
import { FaImages } from "react-icons/fa";

const SignUp = () => {
    const { registerUser, setUser, updateUser, googleSignIn } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    // const imageHostKey = process.env.REACT_APP_imagebb_key;
    const location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const googleProvider = new GoogleAuthProvider()

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }


    const handleSignUp = data => {
        console.log(data)
        const image = data.image[0]
        console.log(image)
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=3e612e96581a7ae3ea2fc832c651797c`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    registerUser(data.email, data.password)
                        .then(result => {
                            const verify = false
                            const user = result.user
                            const profileImg = imgData.data.url
                            // console.log( imgData.data.url);
                            setUser(user);
                            // console.log(user)
                            const userInfo = {
                                displayName: user.name
                            }
                            saveUser(
                                data.name,
                                data.email,
                                data.role,
                                verify,
                                profileImg,
                                data.address,
                                data.profession,
                                data.phone,
                                data.skills,
                                data.experience,
                                
                            );
                            updateUser(userInfo)
                                .then(() => {
                                })
                                .catch(err => console.log(err));
                            toast('Your Account Created Successfully.')
                        })
                        .catch(error => console.log(error))
                }
            })

        // console.log(data);

    }

    const handlegoogle = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user
                setUser(user);
                console.log(user);
                const userInfo = {
                    displayName: user.name
                }
                updateUser(userInfo)
                    .then(() => {
                        const role = "seeker";
                        saveUser(user.name, user.email, role);
                    })
                    .catch(err => console.log(err));
                toast('Your Account Created Successfully.')
            })
            .catch(error => console.log(error))
    }


    const saveUser = (name, email, role,verify,   profileImg, address, profession,  phone, skills, experience,  ) => {
        const user = {
            name,
            email,
            role,
            verify,
            profileImg,
            address,
            profession ,
            phone,
            skills,
            experience,

        };
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }


    return (
        <div className=' flex justify-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text dark:text-white">Full Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text dark:text-white">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text dark:text-white">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className='my-2 flex justify-between'>
                        <label className=' btn btn-ghost text-black gap-x-2' htmlFor="image"><FaImages className='text-xl'></FaImages> Profile Picture</label>
                        <input {...register("image")} className='hidden' type="file" id='image' />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text dark:text-white">Address</span></label>
                        <input type="text" {...register("address", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs " />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text dark:text-white">Profession</span></label>
                        <input type="text" {...register("profession", {
                        })} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text dark:text-white">Phone</span></label>
                        <input type="text" {...register("phone", {
                        })} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text dark:text-white">Skills</span></label>
                        <input  type="text" {...register("skills", {
                        })} className="input input-bordered w-full max-w-xs h-24 scroll-my-40" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text dark:text-white">Experience</span></label>
                        <input type="text" {...register("experience", {
                        })} className="input input-bordered w-full max-w-xs h-24 scroll-my-40" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text dark:text-white">Role</span></label>
                        <select {...register("role")}>
                            <option disabled selected value="">Select</option>
                            <option value="recruiter">Recruiter</option>
                            <option value="seeker">Job Seeker</option>
                        </select>

                    </div>
                    <input className='btn  w-full mt-4' value="Sign Up" type="submit" />
                </form>
                <p className='mt-3'>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handlegoogle} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;