import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";

const FeatureCard = ({ feature }) => {
    const { job_title, skills, experience, deadline, location } = feature;
    return (
        <div className="card-body ">
            <h2 className="card-title"></h2>
            <p className="text-xl text-green-500">{job_title}</p>
            <p className="flex items-center gap-2">
                <MdLocationPin />
                {location}
            </p>
            <p className="flex items-center gap-2">
                <FaGraduationCap />
                {skills}
            </p>
            <div className="flex justify-around">
                <p className="flex items-center gap-2">
                    <MdWork /> At least {experience}{" "}
                    {experience > 1 ? "years" : "year"}
                </p>
                <p className="flex items-center gap-2">
                    <BsCalendar2DateFill />
                    Deadline: {deadline}
                </p>
            </div>
        </div>

    );
};

export default FeatureCard;