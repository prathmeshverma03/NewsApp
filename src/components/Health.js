import React from 'react'
import News from './News'

const Health = () => {
  return (
    <>
    <h3 className='text-center'>Health</h3>
    <News url="https://newsapi.org/v2/top-headlines?category=health&apiKey=0894111e580846cf80c553cc90b39958"/>
    </>
  )
}

export default Health