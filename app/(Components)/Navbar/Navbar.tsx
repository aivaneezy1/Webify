"use client"
import React from 'react'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from '@/app/utils/dark-mode-toogle'
import DesktopSidebarComponent from '@/app/(sidebar)/desktop-sidebar'


const NavbarComponent = () => {
    const { isLoaded, isSignedIn, user } = useUser()
    return (
        <div className='flex justify-between items-center shadow-lg bg- p-4 text-white  '>
            <Link href="/">
                <div>We<span className='text-green-500'>bi</span>fy</div>
            </Link>

            <div>


            </div>
            <div className='ml-auto flex flex-row items-center justify-center  gap-5'>
                {!isSignedIn ? (
                    <Link href="/sign-in">
                        <div className='bg-blue-500 py-2 px-6 rounded-lg hover:bg-blue-600'>Login</div>
                    </Link>
                ) : <DesktopSidebarComponent />}

                {/*Dark mode */}
                <div>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default NavbarComponent
