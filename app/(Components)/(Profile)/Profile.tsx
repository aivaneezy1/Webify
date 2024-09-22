"use client"
import React from 'react'
import Image from 'next/image'
import { useSelector, UseSelector } from 'react-redux'
import { RootState } from '@/app/redux/store'
import { useUser } from '@clerk/clerk-react'
import CardProfileComponent from './CardProfile'
const ProfileComponent = () => {
    const { user } = useUser()
    return (
        <>
            <div className='flex justify-start items-start mt-36 md:ml-20'>
                <div className='flex flex-row gap-5 '>
                    <Image
                        width={100}
                        height={100}
                        alt="profileImage.png"
                        src={`${user?.imageUrl}`}

                        className='rounded-full flex justify-start items-start'
                    />
                    <div className='flex flex-col'>
                        <div className='flex md:flex-row flex-col justify-start items-start md:justify-center md:items-center text-center gap-2'>
                            <div>
                                <h2 className='font-bold text-2xl md:text-3xl whitespace-nowrap'>
                                    {user?.fullName}
                                </h2>
                            </div>
                            <div>
                                <span className='text-xl md:text-2xl'>({user?.emailAddresses[0].emailAddress})</span>
                            </div>
                        </div>
                        <span className='mt-5 bg-gray-500 rounded-lg p-2 max-w-[300px]'>{user?.id}</span>
                    </div>
                </div>

            </div>

            {/*Profile Card */}
            <div>
                <CardProfileComponent />
            </div>
        </>
    )
}

export default ProfileComponent
