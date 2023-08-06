import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Joi from 'joi'



export default function Login({saveUserDataToken}) {

  const [user, setUser] = useState({})
  const [apimessage, setApimessage] = useState(null)
  const [spin, setSpin] = useState(false)
  const [joiEror, setJoiEror] = useState(null)

  
  let navigate = useNavigate()
  
  
  function joiValidate() {
    const schema = Joi.object({
      
      
  
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
    })
   let joiMessage = schema.validate(user , {abortEarly:false} )
   if (joiMessage.error) {
    let errorList=joiMessage.error.details
    setJoiEror(errorList)
    
   }else{
  
    sendUserToApi()
  
   }
    
   
  
  
    
    
  
  }
  
  function getUserDataFromInputs(e) {
    setApimessage(null)
  let myUser ={...user}
  myUser[e.target.id]=e.target.value
  setUser(myUser)
      
  }
  
  async function sendUserToApi() {
    setSpin(true)
  let{data}= await axios.post('https://movies-api.routemisr.com/signin',user)
  if (data.message === "success") {
    localStorage.setItem("userData",data.token)
    saveUserDataToken()
    navigate('/')

    setSpin(false)
    }else{
     setApimessage(data)
     setSpin(false)
    }
  }
  
  
  function submitForm(e) {
      e.preventDefault()
      joiValidate()

  }
  
   
  

  return<>
  <div className="container my-5">
  

 
  <form className='w-75 m-auto' onSubmit={submitForm} >
  {apimessage?  <p class="text-danger ">{apimessage.message}</p>: "" }

  
  
  <div className="form-floating mb-3">
  <input onChange={getUserDataFromInputs}  type="email" className="form-control" id="email" placeholder="name@example.com"/>
  <label htmlFor="email">Email address</label>
  </div>
  <div className="form-floating mb-3">
  <input onChange={getUserDataFromInputs}  type="password" className="form-control" id="password" placeholder="Password"/>
  <label htmlFor="password">Password</label>
  </div>
  
  
  <button type="submit" className="button text-white mb-3 ">submit</button>
  
  
  </form > 
  
  </div>
  
  
  
  
  
  </>





}