import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";

const FeatureCard = ({ feature }) => {
    const { job, category, location, img } = feature;
    return (
        <div className="card h-40 lg:card-side shadow-xl gap-y-4">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job}</h2>
                <p>{category}</p>
                <div className="card-actions justify-end">
                <p className='marker'>{location.one}</p>
                <p className='marker'>{location.two}</p>
                <p>Part Time</p>
                </div>
            </div>
        </div>

    );
};

export default FeatureCard;