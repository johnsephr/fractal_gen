import React, { createContext, useState } from 'react';

// create context
export const ControlPanelContext = createContext();

const ControlPanelContextProvider = props => {
    const [genTrigger, setGenTrigger] = useState(0);
    const [random, setRandom] = useState(true);
    const [branchesCount, setBranchesCount] = useState(9);
    const [angleValue, setAngleValue] = useState(0.85);

    return (
        <ControlPanelContext.Provider
            value={{
                genTrigger,
                setGenTrigger,
                random,
                setRandom,
                branchesCount,
                setBranchesCount,
                angleValue,
                setAngleValue
            }}>
            {props.children}
        </ControlPanelContext.Provider>
    );
};

export default ControlPanelContextProvider;