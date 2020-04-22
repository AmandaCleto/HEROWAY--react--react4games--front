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
    updateOpenedChests: (position) => null
})

function ChestsProvider(props: IProps) {
    const [chestsState, updateChestsState] = React.useState({
        totalChests: 2, //tirar valor hardcode
        openedChests: {
            total: 0,
            position: []
        },        
        updateOpenedChests: (position) => {
            updateChestsState((prevState) => {
                return {
                    totalChests: prevState.totalChests,
                    openedChests: {
                        total: prevState.openedChests.total + 1,
                        position: prevState.openedChests.position.concat(position),
                    },
                    updateOpenedChests: prevState.updateOpenedChests,
                };
            })
        }
    });

    return (
        <ChestsContext.Provider value={chestsState}>{props.children}</ChestsContext.Provider>
    )
}

export default ChestsProvider;