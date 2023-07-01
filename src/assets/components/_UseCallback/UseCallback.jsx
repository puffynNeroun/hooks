import {useCallback, useState} from "react";
import ItemsList from "./ItemsList.jsx";


const UseCallback = () => {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`)
    }, [count])

    return (
        <div>
            <h1 style={styles}>Количество элементов: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Добавить</button>
            <button onClick={() => setColored(prev => !prev)}>Изменить</button>

            <ItemsList getItems={generateItemsFromAPI}/>
        </div>
    );
};

export default UseCallback;