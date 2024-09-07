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
            <section className='w-full mt-[50px] grid place-items-center'>
                <h2 className='font-black text-[40px] '>Result: <u><b><strong>{ resultValue }</strong></b></u> </h2>
            </section> 
        )
    } else return null
    
}

export default ResultValue