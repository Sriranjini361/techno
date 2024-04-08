import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createjob = () => {

    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [minDescription, setMinDescription] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = {
                jobTitle,
                companyName,
                minDescription,
                description
            };

            const response = await fetch(process.env.REACT_APP_URL + '/api/addJob', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Optionally handle successful submission
            console.log('Job added successfully');
            navigate('/submit/2')
        } catch (error) {
            console.error('Error adding job:', error);
            setError('Error adding job. Please try again later.');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="jobTitle" className="block text-gray-700">Job Title<span className='text-red-600'>*</span></label>
                    <input 
                        type="text" 
                        id="jobTitle" 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                        onChange={(e) => setJobTitle(e.target.value)} 
                        value={jobTitle} 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="companyName" className="block text-gray-700">Company Name<span className='text-red-600'>*</span></label>
                    <input 
                        type="text" 
                        id="companyName" 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                        onChange={(e) => setCompanyName(e.target.value)} 
                        value={companyName} 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="minDescription" className="block text-gray-700">Short Description<span className='text-red-600'>*</span></label>
                    <textarea 
                        id="minDescription" 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                        onChange={(e) => setMinDescription(e.target.value)} 
                        value={minDescription} 
                        required 
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700">Description<span className='text-red-600'>*</span></label>
                    <textarea 
                        id="description" 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                        onChange={(e) => setDescription(e.target.value)} 
                        value={description} 
                        required 
                    />
                </div>

                {error && <div className="mt-4 text-red-500">{error}</div>}

                <div className="mt-6">
                    <button 
                        type="submit" 
                        className="w-full px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                        Add Job
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Createjob;
