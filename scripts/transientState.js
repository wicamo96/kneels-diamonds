// Set up the transient state data structure and provide initial values
const transientState = {
    "metalId": 0,
    "styleId": 0,
    "sizeId": 0
}

// Functions to modify each property of transient state
export const setMetal = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setStyle = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}

export const setSize = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}