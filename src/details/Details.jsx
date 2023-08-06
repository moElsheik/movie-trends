import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { MediaContext } from '../mediaContext/MediaContext'
import { useParams } from 'react-router-dom'



export default function Details() {
    const [mediaDetails, setmediaDetails] = useState(null)
    const {baseUrlImage} = useContext(MediaContext)
    let {media,id}  = useParams();

    async function getdetails(media,id) {
     let {data} =  await axios.get(` https://api.themoviedb.org/3/${media}/${id}?api_key=47cb62d16c6395de91679110a4c746c4`)
     setmediaDetails(data)
    }

    
     
    
    

    useEffect(() => {
        getdetails(media,id)

    }, [media,id])

    
    
  return <>

  {mediaDetails? <div className="container ">
     <div className="row my-5 ">

        <div className='  col-md-4 '>
          <div className='imageDetails'>
          <img className='w-100 border' src= {baseUrlImage + mediaDetails.poster_path}  alt="" />
            <div className='imageCaption '>{mediaDetails.tagline}</div>
          </div>
           
        </div>

        <div className='col-md-8'>
            <h2>{mediaDetails.title ||mediaDetails.name }</h2>
            {mediaDetails.release_date?<p> Release date : {mediaDetails.release_date}</p>:""}
            
            <span className=''>Vote Avrage: {Math.floor(mediaDetails?.vote_average*10)}% </span>
            <div className='bg-black mb-2  w-50  rounded-2  overflow-hidden ' style={{height:'20px'}} >
              <div  className='bg-success h-100'  style={{width:`${Math.floor(mediaDetails?.vote_average*10)}%`}}>

              </div>



            </div>


            <div className='d-flex'>
              { mediaDetails.genres.map(element => 
              
               <h6 className='py-1 px-2 my-2 me-2 bg-success'>{element.name}</h6>   
              )}
            </div>

            <p className='fs-4 my-2'> {mediaDetails.overview} </p>







        </div>

    </div>
  </div>:""}
 
  </>
}
