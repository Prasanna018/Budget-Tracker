import Logo from '@/components/ui/Logo'
import { ModeToggle } from '@/components/ui/ToggleMode'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='flex flex-col relative w-full h-screen items-center justify-center'>
            <div className='mt-8' >
                <div className='py-4 flex justify-center items-center'>
                    <Logo></Logo>

                </div>
                {children}
            </div>
        </div>
    )
}

export default layout
