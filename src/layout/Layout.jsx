import React from 'react'




import Navbar from './../navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout({userDecodedData , logOut}) {
  return<>
  <Navbar logOut={logOut} userDecodedData={userDecodedData} />

<Outlet/>

  
  
  </>
}
