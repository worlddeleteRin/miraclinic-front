import { useState } from 'react';

import { useRecoilState } from 'recoil';

import { testInputValueState, testInputValueState2 } from '@/atoms/siteState';

import { useSite } from '@/hooks/useSite';

function TestInput () {
    //const site = useSite()
    //const inputValue = site.inputValue
    // const [inputValue, setInputValue] = useState("some initial input here")
    const [inputValue, setInputValue] = useRecoilState(testInputValueState)
    const [inputValue2, setInputValue2] = useRecoilState(testInputValueState2)

    const handleInput = (event) => {
        const val = event.target.value
        console.log('val is', val)
        setInputValue(val)
    }
    const handleInput2 = (event) => {
        const val = event.target.value
        console.log('val is', val)
        setInputValue2(val)
    }
    return (
        <>
        <input 
            onChange={handleInput}
            value={inputValue}
            placeholder="type some input here"
        />
        <input 
            onChange={handleInput}
            value={inputValue}
            placeholder="type some input here"
        />
        <input 
            onChange={handleInput}
            value={inputValue}
            placeholder="type some input here"
        />
        <input 
            onChange={handleInput}
            value={inputValue}
            placeholder="type some input here"
        />
        <input 
            onChange={handleInput}
            value={inputValue}
            placeholder="type some input here"
        />
        <input 
            onChange={handleInput2}
            value={inputValue2}
            placeholder="type some input here"
        />

        </>
    )
}

export default TestInput
