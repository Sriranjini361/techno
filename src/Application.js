import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUpload from "./FileUpload";


const Apply = () => {
    const navigate = useNavigate(); 
    const [mail, setMail] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            setError('Please Upload Resume');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', mail);
            formData.append('number', number);
            formData.append('resume', file);
            formData.append('coverLetter', coverLetter);

            const response = await fetch(process.env.REACT_APP_URL + '/api/submitForm', {
                method: 'POST',
                body: formData
            });
            

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Optionally handle successful submission
            console.log('Form submitted successfully');
            navigate('/submit/1')
        } catch (error) {
            setError('Error submitting application. Please try again later.');

            console.error('Error submitting form:', error);
        }
    };


    return (
        <div className="container mx-auto px-4 py-8">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                        onChange={(e) => setName(e.target.value)} 
                        value={name} 
                        required  
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                        onChange={(e) => setMail(e.target.value)} 
                        value={mail} 
                        required  
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="number" className="block text-gray-700">Mobile Number</label>
                    <input 
                        type="text" 
                        id="number" 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                        onChange={(e) => setNumber(e.target.value)} 
                        value={number} 
                        required  
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="coverLetter" className="block text-gray-700">Cover Letter</label>
                    <textarea 
                        id="coverLetter" 
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                        onChange={(e) => setCoverLetter(e.target.value)} 
                        value={coverLetter} 
                    />
                </div>

                <FileUpload required file={file} setFile={setFile} setError={setError}/>  
                {error && <div className="mt-4 text-red-500">{error}</div>}  


                <div className="mt-6">
                    <button 
                        type="submit" 
                        className="w-full px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                        Apply Now
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Apply;
