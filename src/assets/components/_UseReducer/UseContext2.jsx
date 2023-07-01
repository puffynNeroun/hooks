import Main from "./Main.jsx";
import Alert from "./_Alert/Alert.jsx";
import {Container} from "react-bootstrap";
import AlertProvider from "./_Alert/AlertProvider.jsx";


const UseContext2 = () => {
    return (
        <AlertProvider>
            <Container className={'pt-3'}>
                <Alert/>
                <Main toggle={() => {}}/>
            </Container>
        </AlertProvider>
    );
};

export default UseContext2;