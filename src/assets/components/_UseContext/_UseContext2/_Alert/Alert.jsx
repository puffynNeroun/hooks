import {useAlert} from "./AlertProvider.jsx";

const Alert = () => {
    const alert = useAlert()

    if (!alert.visible) return null

    return (
        <div className={'alert alert-danger'} onClick={alert.toggle}>
            Это очень важное сообщение
        </div>
    );
};

export default Alert;