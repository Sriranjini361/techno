import Dashboard from './Dashboard';
import JobList from './JobList';
import Createjob from './Createjob';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import  MyContext  from "./Context";
import JobDetails from './JobDetails';
import { useState } from 'react';
import Apply from './Application';
import Submit from './Submit';

function App() {
  const [data, setData] = useState([]);

  return (

    <div>
       <MyContext.Provider value={{ data, setData}}>
     
      <Routes>
            <Route path='/' element={<Dashboard/>}></Route>

            <Route path='/jobsearch' element={<JobList/>}></Route>
            <Route path='/createjob' element={<Createjob/>}></Route>
            <Route path='/jobdetails/:id' element={<JobDetails/>}></Route>
            <Route path='/application/:id' element={<Apply/>}></Route>
            <Route path='/submit/:id' element={<Submit/>}></Route>

          </Routes>
          </MyContext.Provider>
    </div>
  );
}

export default App;
