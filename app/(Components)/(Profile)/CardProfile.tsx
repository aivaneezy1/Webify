import React from 'react'

const CardProfileComponent = () => {
    return (
        <div className='flex justify-center items-center mt-20  '>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 font-semibold text-2xl'>
                <div className='shadow-lg p-6 bg-blue-500 text-white rounded-md cursor-pointer transition transform hover:scale-105 duration-300'>Trial</div>
                <div className='shadow-lg p-6 bg-yellow-500 text-white rounded-md cursor-pointer transition transform hover:scale-105 duration-300'>Projects</div>
                <div className='shadow-lg p-6 bg-green-500 text-white rounded-md cursor-pointer transition transform hover:scale-105 duration-300'>Trial Start Date</div>
                <div className='shadow-lg p-6 bg-red-500 text-white rounded-md cursor-pointer transition transform hover:scale-105 duration-300'>Trial Expiration Date</div>
            </div>
        </div>
    )
}

export default CardProfileComponent
