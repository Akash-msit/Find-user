import React from 'react';
import {useState} from 'react';
import GithubUser from './GithubUser';
const FindUser = () => {
    const [userName, setUserName] = useState("")
  return (
    <div className='find-user'>
      <h1>FIND USER</h1>
      <form>
        <div className='form-group'>
            <input type='text'
                placeholder='Enter Username'
                onChange={(e)=>setUserName(e.target.value)}
                ></input>
        </div>
      </form>
      <div className='result'>
        {userName ?
            <GithubUser username = {userName}/>:
            <p>Please Initiate a Search!!!</p>    
        }

      </div>
    </div>
  )
}

export default FindUser
