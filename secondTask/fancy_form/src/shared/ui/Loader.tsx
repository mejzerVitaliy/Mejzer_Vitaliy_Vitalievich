import React from 'react'

const Loader:React.FC = () => {
    return (
        <main className='w-full h-full flex items-center justify-center ' >
            <span className='w-[70px] h-[70px] rounded-full conic-gradient mask-radial animate-[loaderAnim_1s_infinite_linear] '></span>
        </main>
        
    )
}

export default Loader