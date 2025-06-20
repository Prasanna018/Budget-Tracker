'use client'
import React, { useState } from 'react'
import {
    LayoutDashboard,
    Wallet,
    CreditCard,
    PiggyBank,
    Hamburger,
    X
} from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from './ui/ToggleMode';
import { Button } from './ui/button';

interface MenuItem {
    id: number;
    name: string;
    icon: React.ReactNode;
    href: string;
}

const Menus: MenuItem[] = [
    {
        id: 1,
        name: "Dashboard",
        icon: <LayoutDashboard className="w-5 h-5" />,
        href: "/"
    },
    {
        id: 2,
        name: "Transactions",
        icon: <CreditCard className="w-5 h-5" />,
        href: "/transactions"
    },
    {
        id: 4,
        name: "Manage",
        icon: <Wallet className="w-5 h-5" />,
        href: "/manage"
    },
];

const MobileNavbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="md:hidden">
            {/* Header */}
            <div className='flex justify-between border-b px-4 items-center p-3 sticky top-0 bg-background z-40'>
                <div className=''>
                    <div className="flex items-center gap-x-2 sm:gap-x-3">
                        <div className="relative h-7 w-7 sm:h-10 sm:w-10">
                            <PiggyBank className="absolute h-full w-full stroke-[2] sm:stroke-[2.5] text-indigo-500" />
                            <PiggyBank className="absolute h-full w-full fill-indigo-500/20" style={{ transform: 'translate(1px, 1px)' }} />
                        </div>
                        <span className="
                            relative
                            bg-gradient-to-r
                            from-fuchsia-500
                            via-purple-500
                            to-indigo-600
                            bg-clip-text
                            text-xl
                            sm:text-3xl
                            font-bold
                            tracking-tight
                            text-transparent
                            before:absolute
                            before:-inset-0.5
                            before:bg-gradient-to-r
                            before:from-fuchsia-500/20
                            before:via-purple-500/20
                            before:to-indigo-600/20
                            before:blur-[2px]
                            sm:before:blur-sm
                            before:content-['']
                        ">
                            Budget Tracker
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2 gap-x-4">
                    <ModeToggle />
                    <button onClick={() => setOpen(!open)}>
                        {open ? <X className="w-6 h-6" /> : <Hamburger className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Sliding Menu - appears below header */}
            <div className={`
                bg-background
                overflow-hidden
                transition-all
                duration-300
                ease-in-out
                ${open ? 'max-h-screen' : 'max-h-0'}
                shadow-md
            `}>
                <NavSlides setOpen={setOpen} />
            </div>
        </div>
    )
}

export default MobileNavbar

interface NavSlidesProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavSlides = ({ setOpen }: NavSlidesProps) => {
    const handleOpen = () => {
        setOpen(false)
    }
    return (
        <div className='w-full p-4'>
            <div className="flex flex-col gap-4">
                {Menus.map((menu) => (
                    <Link
                        key={menu.id}
                        href={menu.href}
                        className="flex items-center gap-4 p-2 hover:bg-muted rounded"
                        onClick={handleOpen}
                    >
                        <span>
                            {menu.icon}
                        </span>
                        <p>{menu.name}</p>
                    </Link>
                ))}
            </div>
            <div className="mt-4">
                <Button onClick={handleOpen} variant="outline" className="w-full">Close Menu</Button>
            </div>
        </div>
    )
}