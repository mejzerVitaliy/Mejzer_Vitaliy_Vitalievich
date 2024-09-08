import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenModal } from "../../../features/chooseCurrency/slices/openModalSlice";
import { RootState } from "../../../app/providers/store";
import { toggleOpenModal2 } from "../../../features/chooseCurrency/slices/openModal2Slice";
import ValueOfCurrency from "../../inputValue/model/ValueOfCurrency";
import ResultValue from "../../resultValue/model/ResultValue";

const Exchanger: React.FC = () => {
    const dispatch = useDispatch();
    const selectedCurrency = useSelector((state: RootState) => state.selectedCurrency.selectedCurrency)
    const selectedIntoCurrency = useSelector((state: RootState) => state.selectedIntoCurrency.selectedCurrency)

    return (
        <main className="w-[280px] sm:w-[600px] lg:w-[700px] xl:w-[900px] h-[400px] lg:h-[450px] xl:h-[500px] p-[16px] text-white font-rubik  rounded-[20px] bg-orange-500">
            <section className="text-center h-[150px] lg:h-[200px] flex flex-col justify-between">
                <article>
                    <h2 className="text-[20px] sm:text-[26px] lg:text-[30px] xl:text-[36px] font-bold">Select currencies</h2>
                    <p className="text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[20px]">
                        For the converter to work, you must select currencies.
                    </p>
                </article>

                <article className="w-full flex justify-evenly items-center">
                    <button
                        onClick={() => dispatch(toggleOpenModal())}
                        className="p-[8px] min-w-[70px] sm:min-w-[150px] lg:min-w-[200px] xl:min-w-[250px] w-[70px] sm:w-[150px] lg:w-[200px] xl:w-[250px] bg-[#181818] text-[12px] sm:text-[16px] lg:text-[20px] xl:text-[24px] font-bold border-2 border-solid border-black rounded-[14px]"
                    >
                        {selectedCurrency ? <u><b>{ selectedCurrency.currency }</b></u> : 'Choose currency'}
                    </button>

                    <h4 className="text-[16px]">into</h4>

                    <button
                        onClick={() => dispatch(toggleOpenModal2())}
                        className="p-[8px] min-w-[70px] sm:min-w-[150px] lg:min-w-[200px] xl:min-w-[250px] w-[70px] sm:w-[150px] lg:w-[200px] xl:w-[250px] bg-[#181818] text-[12px] sm:text-[16px] lg:text-[20px] xl:text-[24px] font-bold border-2 border-solid border-black rounded-[14px]"
                    >
                        {selectedIntoCurrency ? <u><b>{ selectedIntoCurrency.currency }</b></u>  : 'Choose currency'}
                    </button>
                </article>
                <hr />
            </section>

            <ValueOfCurrency />

            <hr />

            <ResultValue />
        </main>
    );
};

export default Exchanger;
