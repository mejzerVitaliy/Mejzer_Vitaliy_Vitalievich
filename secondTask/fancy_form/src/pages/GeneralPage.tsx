import React from 'react'
import Header from '../layout/Header'
import Exchanger from '../entites/exchenger/model/Exchanger'
import { useGetCurrenciesQuery } from '../features/chooseCurrency/api/getCurrencies'
import Loader from '../shared/ui/Loader'
import { useSelector } from 'react-redux'
import { RootState } from '../app/providers/store'
import SelectCurrencyModal from '../features/chooseCurrency/model/SelectCurrencyModal'
import SelectIntoCurrencyModal from '../features/chooseCurrency/model/SelectIntoCurrencyModal'

const GeneralPage: React.FC = () => {
    const isModalOpen = useSelector((state: RootState) => state.openModal.isModalOpen)
    const isModal2Open = useSelector((state: RootState) => state.openModal2.isModal2Open)
    
    const { data, isLoading, isError } = useGetCurrenciesQuery()
    
    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        console.error(isError);
        return <h1 className='w-full h-full grid place-items-center font-black text-white text-[50px]'>Error occurred while fetching data</h1> 
    }

    if (data) {
        return (
            <main>
                <main className='w-full h-screen flex flex-col'>
                    <Header />

                    <section className='flex-grow flex items-center justify-center'>
                        <Exchanger />
                    </section>
                </main>
                {isModalOpen && <SelectCurrencyModal currencies={data} />}
                {isModal2Open && <SelectIntoCurrencyModal currencies={data} />}
            </main>
            
        );
    }

    return null;
}

export default GeneralPage;