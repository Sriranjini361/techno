import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate(); 

    const handleJobSearch = () => {
        navigate('/jobsearch');
    };

    const handleJobpost = () => {
        navigate('/createjob');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <button onClick={()=>handleJobSearch()} className="m-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                    Job Search
                </button>
            </div>
            <div className="text-center mt-4">
                <button onClick={()=>handleJobpost()} className="m-2 px-4 py-2 bg-blue-500 text-white rounded-md">
                    Post a Job
                </button>
            </div>
        </div>
    );
}

export default Dashboard;
