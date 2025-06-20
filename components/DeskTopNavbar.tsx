'use client'
import React from 'react'
import Logo from './ui/Logo'
import {
    LayoutDashboard,
    Wallet,
    CreditCard,
    PieChart,
    Settings,
    Calendar,
    BarChart2,
    FileText
} from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from './ui/ToggleMode';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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

const DeskTopNavbar = () => {
    const pathname = usePathname();

    return (
        <nav className='hidden md:flex w-full h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'>
            <div className='container mx-auto flex items-center justify-between px-6'>
                {/* Logo with subtle animation */}
                <Link href="/" className='flex items-center gap-2 group'>
                    <div className='group-hover:rotate-12 transition-transform duration-300'>
                        <Logo />
                    </div>

                </Link>

                {/* Navigation Links with active state */}
                <div className='flex items-center gap-1'>
                    {Menus.map((menu) => (
                        <Link
                            key={menu.id}
                            href={menu.href}
                            className={cn(
                                'flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200',
                                pathname === menu.href
                                    ? 'bg-primary/10 text-primary font-medium'
                                    : 'hover:bg-accent hover:text-accent-foreground text-muted-foreground'
                            )}
                        >
                            <span className='[&>svg]:w-5 [&>svg]:h-5'>
                                {menu.icon}
                            </span>
                            <span>{menu.name}</span>
                        </Link>
                    ))}
                </div>

                {/* User controls with better spacing */}
                <div className='flex items-center gap-4'>
                    <ModeToggle />
                    <div className='flex items-center gap-2 pl-4 border-l border-border'>
                        <UserButton
                            afterSignOutUrl="/"
                            appearance={{
                                elements: {
                                    avatarBox: 'w-9 h-9',
                                }
                            }}
                        />
                        <span className='text-sm font-medium hidden lg:inline-block'>
                            Account
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default DeskTopNavbar