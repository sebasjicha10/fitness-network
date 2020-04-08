import { LOG_IN } from "./actions"


const applicationState = {
    logged: false,
    colors: {
        fitnessGreen: "#0CB128",
        fitnessOrange: "#FF9224",
        inactiveGrey: "#676767",
        navBarGrey: "#F3F3F3",
        white: "#FFFFFF",
        orange: "#E8A87C",
        purple: "#C38D9E",
        lightblue: "#85CDCA",
    }
}

const reducer = (state = applicationState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                logged: !state.logged,
            }
        default: 
            return state
    }
}


export default reducer