import React, { createContext, useState } from 'react';

// create context
export const ControlPanelContext = createContext();

const ControlPanelContextProvider = props => {
    const [genTrigger, setGenTrigger] = useState(0)

    return (
        <ControlPanelContext.Provider
            value={{
                genTrigger,
                setGenTrigger
            }}>
            {props.children}
        </ControlPanelContext.Provider>
    );
};

export default ControlPanelContextProvider;