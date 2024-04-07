import React from "react";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
const Submit = () => {
    const {id} = useParams();
  const navigate = useNavigate(); 
  const handleClick = () => {
    if(id==1){

    

    navigate('/jobsearch')
    }
    else{
        navigate('/createjob')
    }
  }
  const handleTouch = () => {
    navigate('/')

  }

    return (
      
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">{id==1?'Application Submitted Successfully!':'Job Created Successfully'}</h2>
                <p className="text-gray-700 text-center mb-6">{id==1?'Thank you for applying for the position.':'Thank you for creating the Job'}</p>
                <div className="flex justify-center">
                    <button 
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
                        onClick={handleClick} // Reload the page on button click
                    >
                       {id==1?'Apply for Another Position':'Create Another Job'}
                    </button>
                </div>
                {id==2&&(
                
                <div className="flex justify-center mt-4">
                    <button 
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
                        onClick={handleTouch} // Reload the page on button click
                    >
                        Dashboard
                    </button>
                    
                </div>
                )}
            </div>
        </div>
    );
};

export default Submit;
