import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'



export let MediaContext =createContext('')
export default function MediaContextProvider(props) {
  const [movieList, setMovieList] = useState(null)
  const [peopleList, setpeopleList] = useState(null)
  const [tvList, setTvList] = useState(null)
  let baseUrlImage ="https://image.tmdb.org/t/p/original/"
  
  
  async function getTrendings(media,callBack) {
  let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${media}/week?api_key=47cb62d16c6395de91679110a4c746c4`)
   callBack(data.results)
   

  }


  function setData(){
    getTrendings("movie",setMovieList)
    getTrendings("tv",setTvList)
   getTrendings("person",setpeopleList)
  }
  useEffect(() => {
    setData()
    console.log(peopleList);
   
  }, [])
  
  
  
  
  
  
  
  
  
  


  return <MediaContext.Provider value={{movieList ,peopleList ,tvList , baseUrlImage }}>
      {props.children}
  </MediaContext.Provider>
 
}