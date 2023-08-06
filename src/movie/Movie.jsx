import React, { useContext } from 'react'
import { MediaContext } from '../mediaContext/MediaContext'
import { Link } from 'react-router-dom';


export default function Movie() {

    const {movieList,baseUrlImage} = useContext(MediaContext)
  return <>
  <div className="container-fluid">
  <div className='row'>
  {movieList?  movieList.map((movie,indx )=>

<div key={indx} className='col-md-3  p-2 '> 
<Link  to= {`/details/movie/${movie.id}`}>
<div className="card text-center text-white bg-dark rounded-3 overflow-hidden border" >
  <div className='image-card overflow-hidden'>  <img src={baseUrlImage+movie.poster_path} class="card-img-top" alt="..."/>
</div>
  <div className="card-body ">
    <h6 className='py-2'>{movie.title}</h6>
  </div>
</div> 
</Link>
</div>

 ): <div className=' h-100 d-flex align-items-center justify-content-center position-absolute top-0  start-0 w-100'>
  
 <div className="spinner-border text-light" role="status">
 <span className="visually-hidden">Loading...</span>
</div>
 
 </div>}
  </div>
  </div>
  
  
  
  </>
    
  
}
