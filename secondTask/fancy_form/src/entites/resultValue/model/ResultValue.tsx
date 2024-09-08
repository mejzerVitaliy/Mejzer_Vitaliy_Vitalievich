import React, { useMemo, useState } from 'react'
import { calculateExchange } from '../lib/calculateExchange'
import { useSelector } from 'react-redux'
import { RootState } from '../../../app/providers/store'

const ResultValue: React.FC = () => {
    const [resultValue, setResultValue] = useState<number | null>(null)
    const selectedValue = useSelector((state: RootState) => state.selectedValue.value)
    const selectedCurrency = useSelector((state: RootState) => state.selectedCurrency.selectedCurrency)
    const selectedIntoCurrency = useSelector((state: RootState) => state.selectedIntoCurrency.selectedCurrency )

    useMemo(() => {
        setResultValue(calculateExchange(selectedValue, selectedCurrency, selectedIntoCurrency))
    }, [selectedValue, selectedCurrency, selectedIntoCurrency])

    if (resultValue) {
        return (
            <section className='w-full mt-[50px] lg:mt-[40px] grid place-items-center text-center'>
                <h2 className='font-black text-[20px] sm:text-[26px] lg:text-[30px] xl:text-[36px] '>Result: <u><b><strong>{ resultValue }</strong></b></u> </h2>
            </section> 
        )
    } else return (
        <section className='w-full mt-[50px] lg:mt-[40px] grid place-items-center'>
            <h2 className='font-black text-[24px] sm:text-[26px] lg:text-[30px] xl:text-[36px] '>Here will be the result.</h2>
        </section> 
    ) 
    
}

export default ResultValue