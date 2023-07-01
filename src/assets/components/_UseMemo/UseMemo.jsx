import {useEffect, useMemo, useState} from "react";

function complexCompute(num) {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}

const UseMemo = () => {
    const [number, setNumber] = useState(10)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => {
        return {
            color: colored ? 'darkred' : 'black'
        }
    }, [colored])

    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    useEffect(() => {
        console.log('Styles changed')
    }, [styles])

    return (
        <div>
            <h1 style={styles}>Вычисдяемое свойство: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}> +</button>
            <button onClick={() => setNumber(prev => prev - 1)}> -</button>
            <button onClick={() => setColored(prev => !prev)}>Изменить</button>
        </div>
    );
};

export default UseMemo;