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
        <main className="w-[900px] h-[500px] p-[16px] text-white font-rubik  rounded-[20px] bg-orange-500">
            <section className="text-center h-[200px] flex flex-col justify-between">
                <article>
                    <h2 className="text-[30px] font-semibold">Select currencies</h2>
                    <p className="text-[16px]">
                        For the converter to work, you must select currencies.
                    </p>
                </article>

                <article className="w-full flex justify-evenly items-center">
                    <button
                        onClick={() => dispatch(toggleOpenModal())}
                        className="p-[12px] min-w-[240px] bg-[#181818] border-2 border-solid border-black rounded-[20px]"
                    >
                        {selectedCurrency ? <u><b>{ selectedCurrency.currency }</b></u> : 'Choose your currency'}
                    </button>

                    <h4>into</h4>

                    <button
                        onClick={() => dispatch(toggleOpenModal2())}
                        className="p-[12px] min-w-[240px] bg-[#181818] border-2 border-solid border-black rounded-[20px]"
                    >
                        {selectedIntoCurrency ? <u><b>{ selectedIntoCurrency.currency }</b></u>  : 'Choose into currency'}
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
