"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'; // ShadCN button
const HeroComponent = () => {
    const [isYearly, setIsYearly] = useState(false);
    return (
        <div className="text-white mt-36 max-w-auto">
            <h2 className="text-center text-xl font-semibold ">Create your <span className="border-b-2 border-green-500 font-bold">own website</span> in few minutes</h2>
            <h1 className="text-9xl font-bold text-center md:text-[150px]">Webify </h1>

            <div className='flex justify-center items-center mt-20'>
                <Image
                    src="/gojo.avif"
                    alt="image.png"
                    width={500}
                    height={500}
                    className='rounded-lg' />
            </div>

            {/*Pricing Card */}
        </div>
    )
}

export default HeroComponent
