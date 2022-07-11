import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Friend from './Friend'

const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(rest => rest.json())
        .then(data => setFriends(data))
    },[])
    

  return (
    <section className='py-20'>

        <h1 className='text-4xl text-red-400 font-semibold text-center'>My Total Friends: {friends.length}</h1>

        <div className='w-full py-20 grid px-10 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {/* {
                friends.map(friend => console.log(friend))
            } */}
            {
            friends.map(friend => <Friend
            key={friend.id}
            friend={friend}
            ></Friend>)
            
            }
        </div>
    </section>
  )
}

export default Friends