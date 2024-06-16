import React from'react';
import { Link } from'react-router-dom';

const Jobcard = ({ title, company, location, description, time, id }) => {
    return (
      <div className='bg-[#2e2c2c] text-white p-4 rounded-lg shadow-md'>
        <Link to={`/job/jobdesc/${id}`} className='flex items-center mb-2'>
          <div className='bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center mr-3'>
            <span className='text-lg font-bold'>{company.charAt(0)}</span>
          </div>
          <div>
            <h3 className='text-xl font-bold'>{title}</h3>
            <p className='text-sm text-gray-400'>{company}</p>
          </div>
        </Link>
        <p className='text-gray-300 mb-2'>{location}</p>
        <p className='text-gray-200 mb-4'>{description}</p>
        <p className='text-gray-400 text-sm'>{time}</p>
      </div>
    );
  };
  
  export default Jobcard;