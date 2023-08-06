import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({userDecodedData , logOut}) {




  return<>
  
  {<nav className="navbar navbar-expand-lg bg-success  " data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/">Movie-Db</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link text-white" to="movies">Trending-movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="tv">Trending-TV</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="people">Trending-People</Link>
        </li>
        
      </ul>
{userDecodedData?<ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center ">

<li className="nav-item mx-4 fw-bold fs-5">
<span className='text-white'>  Hello { userDecodedData.first_name }</span>
  </li>
  
  <li className="nav-item">
    <button  onClick={logOut} className="button text-white nav-link" >Logout</button>
  </li>
  </ul>:<ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link "  to="Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="regester">Regester</Link>
        </li>
       
        </ul>}
      


        
      
    </div>
  </div>
</nav>  }


  
  
  
  
  
  
  </>
}
