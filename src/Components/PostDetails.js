import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const PostDetails = () => {
    const {postId} = useParams();

    const [post, setPost] = useState({})

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[post])


  return (
    <section className='border border-yellow-400 rounded p-4 mx-6'>
        <h1 className='text-center text-xl text-blue-400'>Post Details: {postId}</h1>
        <h1 className='text-center text-xl text-rose-400 py-2'>{post.title}</h1>
        <p className='text-center text-xl text-green-400'>{post.body}</p>
    </section>
  )
}

export default PostDetails