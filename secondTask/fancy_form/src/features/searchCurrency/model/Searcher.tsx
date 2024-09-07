import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../slice/searchSlice'

const Searcher: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <textarea
            maxLength={10}
            placeholder='Type to search...'
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className='w-[80%] h-[35px] px-[12px] mb-[16px] placeholder:text-center placeholder:text-[#a1a1a1] resize-none text-white rounded-xl bg-[#181818] text-center font-karla'
        ></textarea>
    )
}

export default Searcher