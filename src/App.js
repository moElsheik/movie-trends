
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './home/Home';
import Regester from './regester/Regester';
import Login from './login/Login';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import MediaContextProvider from './mediaContext/MediaContext';
import Movie from './movie/Movie';
import Tv from './TV/Tv';
import People from './people/People';
import Details from './details/Details';




function App() {
  const [userDecodedData, setUserDecodedData] = useState(null)

  useEffect(() => {

    if (localStorage.getItem("userData")) {
      saveUserDataToken()
    }
  }, [])

  function logOut() {
    localStorage.clear("userData");
    setUserDecodedData(null)
  }
  

  function saveUserDataToken() {
  let incodedUser =  localStorage.getItem("userData")
  let decodedUser = jwtDecode(incodedUser)
  setUserDecodedData(decodedUser)

  }


  let routers= createHashRouter([
    {path:'/', element:<Layout  userDecodedData={userDecodedData}  logOut={logOut}/>, children:[
      {index:true ,element:<Home/>},
      {path:'regester' ,element:<Regester/>},
      {path:'login' ,element:<Login saveUserDataToken={saveUserDataToken} />},
      {path:'movies' ,element:<Movie />},
      {path:'tv' ,element:<Tv />},
      {path:'people' ,element:<People />},
      {path:'details' ,element:<Details /> ,children:[
        {path:':media',children:[
          {path:':id'}
        ]}
      ]},




  
      
    ] }
  ])



  return <MediaContextProvider><RouterProvider router={routers}/></MediaContextProvider>   
}

export default App;
