import React, { useEffect, useState } from "react";
import { Currency } from "../../../app/types/typesOfCurrencies";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenModal } from "../slices/openModalSlice";
import { setSelectedCurrency } from "../slices/selectedCurrensySlice";
import Searcher from "../../searchCurrency/model/Searcher";
import { RootState } from "../../../app/providers/store";

interface ModalProps {
    currencies: Currency[];
}

const SelectCurrencyModal: React.FC<ModalProps> = ({ currencies }) => {
    const dispatch = useDispatch();
    const [filteredCurrencies, setFilteredCurrencies] = useState<Currency[] | null>(null)
    const searchQuery = useSelector((state: RootState) => state.searchQuery.query)
    const selectedIntoCurrency = useSelector((state: RootState) => state.selectedIntoCurrency.selectedCurrency )

    const closeModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
        dispatch(toggleOpenModal());
        }
    };

    const filterOfCurrency = (searchQuery: string | null, currencies: Currency[]) => {
        if (searchQuery) {
            setFilteredCurrencies(currencies.filter((currency) => currency.currency.toLowerCase().includes(searchQuery.toLowerCase())))
        }  else setFilteredCurrencies(currencies)
    }

    useEffect(() => {
        filterOfCurrency(searchQuery, currencies)
    }, [searchQuery, currencies])

    return (
        <main
            onClick={(e) => closeModal(e)}
            className="w-full h-full fixed top-0 z-10 grid place-items-center bg-[#000000cb] animate-[modalBackgroundAnimation_0.3s_ease-in-out_1]"
        >
            <section className="w-[280px] sm:w-[600px]  h-[500px] xl:h-[600px] rounded-xl relative p-[12px] bg-orange-400 flex flex-col items-center overflow-y-auto animate-[modalAnimation_0.3s_ease-in-out_1]">
                
                <article className='w-full flex flex-col items-center'>
                    <Searcher />
                    <span className='w-[80%] h-[1px] border border-dashed border-black mb-[16px]'></span>
                </article>

                {filteredCurrencies?.map((currency: Currency) => (
                    selectedIntoCurrency !== currency &&
                        <article
                            key={Math.random()*990000000000000}
                            onClick={() => {
                                dispatch(setSelectedCurrency(currency))
                                dispatch(toggleOpenModal())
                            }}
                            className="w-[80%] h-[40px] grid place-items-center my-[4px] rounded-xl text-[16px] sm:text-[20px] lg:text-[24px] text-center hover:bg-[#a1a1a1a1] cursor-pointer border border-solid border-black"
                        >
                            <strong>{currency.currency} - {currency.price.toString().length >= 10 ? `${currency.price.toString().slice(0, 10)}...` : currency.price}</strong>
                        </article>
                ))}
            </section>
        </main>
    );
};

export default SelectCurrencyModal;
