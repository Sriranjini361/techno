import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import MyContext from "./Context";

const JobList = () => {
    const navigate = useNavigate(); 
  //  const [data, setData] = useState([]);
    const { data, setData} = useContext(MyContext);
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/joblistings');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data)

    const handleClick = (id) => {
        navigate(`/jobdetails/${id}`);
    };

    if (data.length === 0) {
        return <div className='font-bold'>No Records Found</div>;
    }

    return (
        <div >
            {data.map((item) => (
                <div className="flex flex-wrap justify-center" key={item.id} onClick={() => handleClick(item.id)}>
                    <Card data={item} />
                </div>
            ))}
        </div>
    );
};

export default JobList;
