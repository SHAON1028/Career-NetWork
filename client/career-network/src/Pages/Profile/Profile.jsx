import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Profile () {
    const { register, handleSubmit, errors } = useForm();

    return (
        <form onSubmit={handleSubmit()}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                ref={register({ required: true })}
            />
            {errors.name && <span>This field is required</span>}
            <input
                type="email"
                name="email"
                placeholder="Email"
                ref={register({ required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <input
                type="number"
                name="age"
                placeholder="Age"
                ref={register({ required: true })}
            />
            {errors.age && <span>This field is required</span>}
            <button type="submit">Update User Info</button>
        </form>
    );
}

export default Profile ;
