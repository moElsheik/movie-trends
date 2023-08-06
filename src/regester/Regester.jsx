import axios from 'axios'
import Joi from 'joi'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Regester() {

const [user, setUser] = useState({})
const [apimessage, setApimessage] = useState(null)
const [spin, setSpin] = useState(false)
const [joiEror, setJoiEror] = useState(null)

let navigate = useNavigate()


function joiValidate() {
  const schema = Joi.object({
    first_name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    last_name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    age: Joi.number().integer().min(18).max(90),

  })
 let joiMessage = schema.validate(user , {abortEarly:false} )
 if (joiMessage.error) {
  let errorList=joiMessage.error.details
  setJoiEror(errorList)
  console.log(joiEror);
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
let{data}= await axios.post('https://movies-api.routemisr.com/signup',user)
if (data.message === "success") {
  navigate('/login')
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

 


  return <>

  
<div className="container my-5 ">


  
 
<form className="w-75 m-auto" onSubmit={submitForm} >
{apimessage?  <p className="text-danger ">{apimessage.message}</p>: "" }
{ joiEror!=null? joiEror.map((err) =><p className="text-danger ">{err.message}</p>):""    }




<div className="form-floating mb-3">
<input onChange={getUserDataFromInputs} type="text" className="form-control " id="first_name" placeholder="First_name"/>


<label htmlFor="first_name">First_name</label>
</div>
<div className="form-floating mb-3">
<input onChange={getUserDataFromInputs}  type="text" className="form-control" id="last_name" placeholder="Last_name"/>
<label htmlFor="first_name">Last_name</label>
</div>

<div className="form-floating mb-3">
<input onChange={getUserDataFromInputs}  type="email" className="form-control" id="email" placeholder="name@example.com"/>
<label htmlFor="email">Email address</label>
</div>
<div className="form-floating mb-3">
<input onChange={getUserDataFromInputs}  type="password" className="form-control" id="password" placeholder="Password"/>
<label htmlFor="password">Password</label>
</div>
<div className="form-floating mb-3">
<input onChange={getUserDataFromInputs}  type="number" className="form-control" id="age" placeholder="Age"/>
<label htmlFor="age">Age</label>
</div>

<button type="submit" className="button text-white mb-3 ">submit</button>


</form > 

</div>
  </>
}
