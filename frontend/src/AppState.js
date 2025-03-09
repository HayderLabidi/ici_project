import React , {useState} from 'react'
import {LoginFormC , LoginFormF} from './LoginForm'
function AppState() {
  const [visible , setVisible] = useState(true);
  return (
    <div>
      {visible?
      <>
      <LoginFormC/>
      <LoginFormF/>
      </> : null
    }
        <button onClick={()=> setVisible(!visible)}>toggle</button>
    </div>
  )
}

export default AppState
