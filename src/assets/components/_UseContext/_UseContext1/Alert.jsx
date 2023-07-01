import {useContext} from "react";
import {AlertContext} from "./UseContext1.jsx";


const Alert = () => {
    const alert = useContext(AlertContext)

    if (!alert) return null

    return (
        <div className={'alert alert-danger'}>
            Это очень важное сообщение
        </div>
    );
};

export default Alert;