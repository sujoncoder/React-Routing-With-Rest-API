import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const FriendDetals = () => {

  const [person, setPerson] = useState({})

  const {friendID} = useParams();


  useEffect(()=>{
    const url = `https://jsonplaceholder.typicode.com/users/${friendID}`
    fetch(url)
    .then(res => res.json())
    .then(data => setPerson(data))
  },[])


  return (
    <section className='w-full'>

        <div className='flex flex-col w-10/12 mx-auto h-screen items-center justify-center'>
        <h1 className='text-2xl md:text-4xl py-10'>Hello I am : <span className='text-blue-400 font-bold'>{person.username}</span></h1>

        <h2 className='text-xl'>Email: <span className='text-green-400'>{person.email}</span></h2>

        <h2 className='text-xl'>City: <span className='text-red-400'>{person.address?.city}</span></h2>
        <h2 className='text-xl'>Street: <span className='text-yellow-500'>{person.address?.street}</span></h2>
        <h2 className='text-xl'>Zipcode: <span className='text-indigo-400'>{person.address?.zipcode}</span></h2>
        <h2 className='text-xl'>Company: <span className='text-orange-400'>{person.company?.name}</span></h2>
        </div>
    </section>
  )
}

export default FriendDetals