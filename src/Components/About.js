import React from 'react'
import Typed from 'react-typed';


const About = () => {
  return (
    <section className='w-9/12 mx-auto h-screen flex justify-center items-center'>

        <main className='space-y-4'>
        <h1 className='text-4xl md:text-6xl text-zinc-400 font-bold animate-pulse'>Hello!</h1>


        {/* React-Typed */}
        <Typed
        className='text-slate-600 font-bold md:text-3xl'
                    strings={['I am SUJON SHEIKH.']}
                    typeSpeed={70}
                    backSpeed={80}
                    loop
                />

        <p className='text-xl md:text-2xl h-full font-medium text-teal-600'>Front End Web Developer | I’m focused on building responsive front-end web applications while learning back-end technologies.</p>
        </main>
    </section>
  )
}

export default About