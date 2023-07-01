import {useEffect, useRef, useState} from "react";

// UseRef - Сохраняет состояние при работе с компонентомБ при рендерах, но при этом не вызвает сам рендер

const UseRef = () => {
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current.value)
    })

    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()

    return (
        <div>
            <h1>Количество рендеров: {renderCount.current}</h1>
            <h2>Прошлое состояние: {prevValue.current} </h2>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button onClick={focus}>Фокус</button>
        </div>
    );
};

export default UseRef;
