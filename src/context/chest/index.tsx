import React from "react";

interface IProps {
    children: React.ReactNode;
}

export const ChestsContext = React.createContext({
    totalChests: 0,
    openedChests: {
        total: 0,
        position: []
    },
    updateOpenedChests: () => null
})

function ChestsProvider(props: IProps) {
    const [chestsState, updateChestsState] = React.useState({
        totalChests: 2,
        openedChests: {
            total: 0,
            position: []
        },        
        updateOpenedChests: () => {
            console.log("chests");
        }
    });

    return (
        <ChestsContext.Provider value={chestsState}>{props.children}</ChestsContext.Provider>
    )
}

export default ChestsProvider;