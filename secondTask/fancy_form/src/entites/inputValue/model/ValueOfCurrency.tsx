import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedValue } from '../slice/selectedValueSlice'


const ValueOfCurrency: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <section className='w-full my-[20px] lg:my-[40px] flex justify-center items-center'>
            <h2 className='text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22px]'> <strong>Lastly, input your value:</strong> </h2>
            <input
                type="number"
                onChange={(e) => dispatch(setSelectedValue(+e.target.value))}
                min={0}
                className='w-[70px] sm:w-[150px] lg:w-[200px] xl:w-[250px] bg-[#181818] text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22px]  text-center font-karla ml-[8px] px-[8px] rounded-2xl'
            />
        </section>
    )
}

export default ValueOfCurrency