import React, {useContext, useState} from 'react';

const AlertContext = React.createContext()
// const AlertToggleContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

// export const useAlertToggle = () => {
//     return useContext(AlertToggleContext)
// }

const AlertProvider = ({children}) => {
    const [alert, setAlert] = useState(false)
    const toggle = () => setAlert(prev => !prev)

    return (
        <div>
            <AlertContext.Provider value={{
                visible: alert,
                toggle
            }}>
                {children}
            </AlertContext.Provider>
        </div>
    );
};

export default AlertProvider;