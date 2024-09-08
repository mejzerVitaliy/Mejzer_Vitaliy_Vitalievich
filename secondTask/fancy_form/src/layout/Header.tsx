import React from 'react'

const Header:React.FC = () => {
    return (
        <header className='w-full h-[70px] lg:h-[80px] xl:h-[100px] flex justify-center items-center font-karla text-white text-[22px] sm:text-[30px] lg:text-[36px] xl:text-[40px] font-bold bg-gradient-to-tr from-[#603f00]  via-[#d88c00] to-[#603f00]'>
            <h1>Crypto Currency Exchanger</h1>
        </header>
    )
}
//  [#5e2d00]   [#d86900]
export default Header