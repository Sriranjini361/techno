import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="w-[90%] rounded overflow-hidden shadow-lg bg-gray-100 m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-cyan-600">Title : {data.jobTitle}</div>
        <div className=" text-lg mb-2">Company Name : {data.companyName}</div>
        <p className="text-gray-700 text-base">Description : {data.miniDescription}</p>
      </div>
    </div>
  );
};

export default Card;
