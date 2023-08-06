import React, { useContext } from 'react'
import { MediaContext } from '../mediaContext/MediaContext'
import { Link } from 'react-router-dom'




export default function Home() {

 

const {movieList ,peopleList ,tvList ,baseUrlImage} = useContext(MediaContext)

  return <>
  {movieList&&peopleList&&tvList? <div className='container'>
  <div className="row">
    <div className=' p-2 col-md-3  '>
      <div className= 'p-2 h-100 w-100 border rounded-3 d-flex align-items-center justify-content-center' >
      <h4 >Trending Movies </h4>      
      </div>
    </div>
  { movieList.slice(0,7).map((movie,indx )=>

<div key={indx} className='col-md-3  p-2 '> 
  <Link  to= {`details/movie/${movie.id}`}>
  

     <div className=" card text-center text-white bg-dark rounded-3 overflow-hidden border" >
    <div className='image-card overflow-hidden'> 
       <img src={baseUrlImage+movie.poster_path} class="card-img-top" alt="..."/>
    </div>
    <div className="card-body ">
      <h6 className='py-2'>{movie.title}</h6>
    </div>
</div> 
  
  </Link>
</div>

 )}
 
  </div>

  <div className="row">
    <div className=' p-2 col-md-3  '>
      <div className= 'p-2 h-100 w-100 border rounded-3 d-flex align-items-center justify-content-center' >
      <h4 >Trending TV </h4>      
      </div>
    </div>
  { tvList.slice(0,7).map((tv,indx )=>

<div key={indx} className='col-md-3  p-2 '> 
<Link  to= {`details/tv/${tv.id}`}>

<div className=" card text-center text-white bg-dark rounded-3 overflow-hidden border" >
  <div className='image-card overflow-hidden'>  <img src={baseUrlImage+tv.poster_path} class="card-img-top" alt="..."/>
</div>
  <div className="card-body ">
    <h6 className='py-2'>{tv.name}</h6>
  </div>
</div>
</Link>
 </div>

 )}
 
  </div>

  <div className="row">
    <div className=' p-2 col-md-3  '>
      <div className= 'p-2 h-100 w-100 border rounded-3 d-flex align-items-center justify-content-center' >
      <h4 >Trending People </h4>      
      </div>
    </div>
  {  peopleList.slice(0,7).map((person,indx )=>
  <div key={indx} className='col-md-3  p-2 '> 
  <div className=" text-center text-white bg-dark rounded-3 overflow-hidden border" >
  <div className='image-card '>  <img src={baseUrlImage+person.profile_path} class="card-img-top" alt="..."/>
</div>
  <div className="card-body ">
    <h6 className='py-2'>{person.name}</h6>
  </div>
</div> </div>

 )}
 
  </div>


  </div>
: <div className=' h-100 d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100'>
  
  <div className="spinner-border text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
  
  </div>}
  
  
  </>
}
