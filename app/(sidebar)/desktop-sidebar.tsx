'use client'
import React, { useState } from 'react'
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SignOutButton, UserProfile } from '@clerk/clerk-react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import { useSelector, UseSelector } from 'react-redux'
import { RootState } from '../redux/store'
import Link from 'next/link'


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: "35%",
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 4,
};


const DesktopSidebarComponent = () => {
    const { user } = useUser()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const userProfile = useSelector((state: RootState) => state.userProfile.value)
    return (
        <div >
            <DropdownMenu>
                <DropdownMenuTrigger
                    className='cursor-pointer '
                    asChild>
                    <div>
                        <Image
                            height={30}
                            width={30}
                            alt="profile.png"
                            src={`${user?.imageUrl}`}
                            className='rounded-full hover:bg-gray-600' />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup
                    >
                        <Link href="/profile">
                            <DropdownMenuItem className='cursor-pointer'>
                                <User className='mr-2 h-4 w-4' />
                                <span>Profile</span>
                            </DropdownMenuItem>
                        </Link>


                        <DropdownMenuItem
                            className='cursor-pointer '>
                            <Plus className="mr-2 h-4 w-4" />
                            <span>Create new project</span>
                        </DropdownMenuItem>

                        <Link href="/billing">
                            <DropdownMenuItem
                                className='cursor-pointer '>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                            </DropdownMenuItem>
                        </Link>

                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>

                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger
                                className='cursor-pointer '>
                                <UserPlus className="mr-2 h-4 w-4" />
                                <span>Invite users</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    <DropdownMenuItem
                                        className='cursor-pointer '>
                                        <Mail className="mr-2 h-4 w-4" />
                                        <span>Email</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        className='cursor-pointer '>
                                        <MessageSquare className="mr-2 h-4 w-4" />
                                        <span>Message</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        className='cursor-pointer '>
                                        <PlusCircle className="mr-2 h-4 w-4" />
                                        <span>More...</span>
                                    </DropdownMenuItem>
                                </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuItem
                            className='cursor-pointer '
                            onClick={handleOpen}>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                        </DropdownMenuItem>

                    </DropdownMenuGroup>

                    <DropdownMenuItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span> <SignOutButton /></span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Conditionally render the UserProfile in the center of the window */}
            {open && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    disableEnforceFocus // Prevents the focus enforcement inside the modal
                    aria-labelledby="user-profile-modal"
                    aria-describedby="modal-description"
                >
                    <Box sx={style}>
                        <UserProfile />
                    </Box>
                </Modal>
            )}
        </div>
    )
}

export default DesktopSidebarComponent
