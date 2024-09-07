import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedValue } from '../slice/selectedValueSlice'

interface ValueOfCurrency {
    value: number
}

const ValueOfCurrency: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <section className='w-full my-[20px] flex justify-center items-center'>
            <h2>Lastly, input your value: </h2>
            <input
                type="number"
                onChange={(e) => dispatch(setSelectedValue(+e.target.value))}
                min={0}
                className='bg-[#181818] text-center font-karla ml-[12px] px-[16px] rounded-2xl'
            />
        </section>
    )
}

export default ValueOfCurrency