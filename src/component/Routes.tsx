import React from 'react'
 import InterFace from './InterFace'
 import LogIn from './LogIn'
 import HomePage from './HomePage'
import { Routes as Routess, Route } from 'react-router-dom'
import SignUp from './SignUp'
import Log from './Log'

function Routes() {



  return (
    <div>
<Routess>
<Route path="/" element={<InterFace/>}></Route>
<Route path="/logIn" element={<LogIn/>}></Route>
<Route path="/saudiday" element={<HomePage/>}></Route>
<Route path="/SignUp" element={<SignUp/>}></Route>
<Route path="/Log" element={<Log/>}></Route>

</Routess>
    </div>
  )
}

export default Routes