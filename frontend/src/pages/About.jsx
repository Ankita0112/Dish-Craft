import React from 'react'
import Header from '../components/Header'

export default function About() {
  return (
    <div>
    <Header/>
    <div className="mx-auto min-h-screen flex flex-col gap-11 ">
      <h1 className='mx-auto mt-24 text-4xl italic'>Here's a video about the features of Dish Craft.</h1>
      <iframe
      className='mx-auto'
      width="560" height="315" 
      src="https://www.youtube.com/embed/Vfh9JMSAKuQ?si=7TmsaQcc3vViYnBv&amp;start=1" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
      </iframe>
  </div>
  </div>
  )
}
