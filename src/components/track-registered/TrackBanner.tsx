import React from 'react'

const Hero: React.FC = () => {
    return (
        <div className='h-80 relative'>
            <div className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-sm py-6 text-[2.5rem] md:text-[3.5rem] text-primary font-extrabold text-center w-full'>
                DSA Sprint
                <p className='text-[0.9rem] md:text-[1.1rem] text-foreground px-5 md:text-muted-foreground font-normal'>
                    Race through logic and precision - every second counts in the world of algorithms
                </p>
            </div>
            <div className='absolute z-10 bg-primary/10 h-full w-full'></div>
            <img src="/event1.jpg" alt="Event Hero" className='h-full w-full object-cover' />
        </div>
    )
}

export default Hero