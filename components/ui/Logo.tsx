import { PiggyBank } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <div

            className="flex items-center gap-x-3"
        >
            {/* Static Piggy Bank Icon with Depth */}
            <div className="relative h-10 w-10">
                <PiggyBank
                    className="absolute h-full w-full stroke-[2.5] text-indigo-500"
                />
                <PiggyBank
                    className="absolute h-full w-full fill-indigo-500/20"
                    style={{ transform: 'translate(1px, 1px)' }}
                />
            </div>

            {/* Gradient Text with Subtle Glow */}
            <span className="
                relative
                bg-gradient-to-r
                from-fuchsia-500
                via-purple-500
                to-indigo-600
                bg-clip-text
                text-3xl
                font-bold
                tracking-tight
                text-transparent
                before:absolute
                before:-inset-0.5
                before:bg-gradient-to-r
                before:from-fuchsia-500/20
                before:via-purple-500/20
                before:to-indigo-600/20
                before:blur-sm
                before:content-['']
            ">
                Budget Tracker
            </span>
        </div>
    )
}

export default Logo