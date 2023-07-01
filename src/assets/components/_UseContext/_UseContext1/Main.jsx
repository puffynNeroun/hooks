const Main = ({toggle}) => {
    return (
        <div>
            <h1>Привет в примере с Context</h1>
            <button onClick={toggle} className={'btn btn-success'}>Показать alert</button>
        </div>
    );
};

export default Main;