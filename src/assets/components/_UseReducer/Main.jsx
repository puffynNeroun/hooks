import {useAlert} from "./_Alert/AlertProvider.jsx";

const Main = () => {
    const {show}  = useAlert()

    return (
        <div>
            <h1>Привет в примере с Context</h1>
            <button onClick={() => show('Этот текст из Main.jsx')} className={'btn btn-success'}>Показать alert</button>
        </div>
    );
};

export default Main;