import {useEffect, useState} from 'react';

function useLogger(value) {
    useEffect(() => {
        console.log('Value changed: ', value)
    }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: {value, onChange},
        value,
        clear
    }
}

const UseNew = () => {
    const input = useInput('')

    useLogger(input.value)

    return (
        <div>
            <input type="text" {...input.bind}/>
            <button onClick={() => input.clear()}>Очистить</button>
            <hr/>
            <h1>{input.value}</h1>
        </div>
    );
};

export default UseNew;