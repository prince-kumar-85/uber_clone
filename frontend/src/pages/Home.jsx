import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
        <div className='bg-[url(https://media.licdn.com/dms/image/v2/D4D22AQHKGBbLRstmUQ/feedshare-shrink_800/feedshare-shrink_800/0/1711179910043?e=2147483647&v=beta&t=AQcbbgM-3K9jqwuPxi968D8ncSekr5uM1Kk8HvLQDhk)] bg-cover bg-center h-screen flex justify-between flex-col w-full pt-8 '>
            <img className='w-20 ml-8' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
            <div className='bg-white pb-7 py-5 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'> Continue</Link>
            </div>

        </div>
    </div>
  )
}

export default Home
