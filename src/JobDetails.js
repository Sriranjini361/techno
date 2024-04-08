import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "./Context";

import { useNavigate } from "react-router-dom";
const JobDetails = () => {
    const { id } = useParams(); // Get the job ID from the URL params
    const { data } = useContext(MyContext);
    const navigate = useNavigate(); 
    // Log the ID and data array to the console
    console.log("ID:", id);
    console.log("Data:", data);

    // Find the job item with the matching id
    const jobItem = data.find(item => item._id == id);

    console.log("Job Item:", jobItem); // Log the job item to the console

    // Check if the job item is found
    if (!jobItem) {
        return <div className="container mx-auto">Job not found</div>;
    }

    const handleClick = () => {
        navigate(`/application/${id}`);
    };

    return (
        <div className="container w-[90%] mx-auto p-6">
            <div className=" mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{jobItem.jobTitle}</div>
                    <div className="text-sm text-gray-600 mb-2">{jobItem.companyName}</div>
                    <p className="text-gray-700 text-base">{jobItem.description}</p>
                </div>
                <div className="px-6 py-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleClick}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
