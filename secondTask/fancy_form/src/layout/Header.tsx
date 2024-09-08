import React from 'react'

const Header:React.FC = () => {
    return (
        <header className='w-full h-[70px] lg:h-[80px] xl:h-[100px] flex justify-center items-center font-karla text-white text-[22px] sm:text-[30px] lg:text-[36px] xl:text-[40px] font-bold bg-gradient-to-tr from-black via-orange-400 to-black'>
            <h1>Crypto Currency Exchanger</h1>
        </header>
    )
}

export default Header