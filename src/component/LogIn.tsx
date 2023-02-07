import React from 'react'
import { useNavigate } from 'react-router-dom'
function LogIn() {
    const [firestName , setFirestName]= React.useState("")
    const [ pass , setPass ] = React.useState<any>()
const navigate = useNavigate()

    const getInfo = ()=>{
if(firestName.length >=3 && pass.length >=3){
localStorage.setItem("firestName" ,firestName)
navigate("/saudiday")
}else{
    alert("Please enter correct information")
}
    }
  return (
    <div className='logIn-form'>
   <fieldset className='logIn-fieldset'>  
       تسجيل دخول  
<input placeholder='First Name' onChange={e =>{setFirestName(e.target.value)}} ></input>
<input placeholder='Password' type='password' onChange={e =>{setPass(e.target.value)}}></input>
<button type='submit' onClick={getInfo}>أهلًا وسهلًا</button>

</fieldset> 

    </div>
  )
}

export default LogIn