import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Posts = () => {
    const [posts, setPost] = useState([])

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
  return (
    <section className='w-full h-full py-20'>
        <p className='text-slate-300 text-center'>Now I am using nestet route here</p>
        <h1 className='text-center text-2xl py-4'>
            Facebook Post Ever Had: {posts.length}
        </h1>

        <div className='w-11/12 mx-auto items-center grid grid-cols-12'>
            {
               posts.map(post => <Link to={`/posts/${post.id}`}>{post.id}</Link>)
            }
        </div><br />

        <Outlet/>

    </section>
  )
}

export default Posts