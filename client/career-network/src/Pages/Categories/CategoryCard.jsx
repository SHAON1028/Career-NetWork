import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {id, category_name, img} = category
    return (
        <Link to={`/category/${category_name}`}>
            <div className='shadow-lg shadow-slate-400 rounded-md '>
                <div className="card w-full my-2">
                    <figure><img className='w-52 h-52 rounded-full' src={img} alt="Shoes" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title font-primaryFont text-2xl">{category_name}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;