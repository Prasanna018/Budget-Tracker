import Navbar from '@/components/ui/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>

            <div>
                <Navbar></Navbar>
            </div>
            {children}

        </div>
    )
}

export default layout
