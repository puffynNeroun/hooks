import React, {useState} from "react";
import Main from "./Main.jsx";
import Alert from "./Alert.jsx";
import {Container} from "react-bootstrap";

export const AlertContext = React.createContext()

const UseContext1 = () => {
    const [alert, setAlert] = useState(false)

    const toggleAlert = () => setAlert(prev => !prev)

    return (
        <AlertContext.Provider value={alert}>
            <Container className={'pt-3'}>
                <Alert/>
                <Main toggle={toggleAlert}/>
            </Container>
        </AlertContext.Provider>
    );
};

export default UseContext1;