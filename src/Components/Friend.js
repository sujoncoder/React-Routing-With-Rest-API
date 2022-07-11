import React from 'react'
import { useNavigate } from 'react-router-dom'

const Friend = (props) => {
    const {id,username} = props.friend;

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(`/friend/${id}`)
    }

  return (
    <div className='border-2 border-purple-500 rounded-md p-2'>
        <h1 className='text-center py-2'>Name: <span className='text-blue-700 font-bold'>{username}</span> </h1>
        
        <div className='text-center'>
        <button onClick={handleNavigate} className='bg-blue-500 p-1 px-2 text-white hover:scale-105 duration-300 rounded-md'>More info</button>
        </div>
    </div>
  )
}

export default Friend