import React, { createContext } from 'react';



const MyContext = createContext({
  data: [],
  setData: () => {},
});

export default MyContext;