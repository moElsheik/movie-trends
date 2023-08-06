import React, { useContext } from 'react'
import { MediaContext } from '../mediaContext/MediaContext'

export default function People() {
    const {peopleList,baseUrlImage} = useContext(MediaContext)
    return <>
    <div className="container-fluid">
    <div className='row'>
    {peopleList?  peopleList.map((people,indx )=>
  
  <div key={indx} className='col-md-3  p-2 '> <div className="text-center text-white bg-dark rounded-3 overflow-hidden border" >
    <div className='image-card'>  <img src={baseUrlImage+people.profile_path} class="card-img-top" alt="..."/>
  </div>
    <div className="card-body ">
      <h6 className='py-2'>{people.name}</h6>
    </div>
  </div> </div>
  
   ):<div className=' h-100 d-flex align-items-center justify-content-center position-absolute top-0  start-0 w-100'>
  
   <div className="spinner-border text-light" role="status">
   <span className="visually-hidden">Loading...</span>
 </div>
   
   </div>}
    </div>
    </div>
    
    
    
    </>
      
}
