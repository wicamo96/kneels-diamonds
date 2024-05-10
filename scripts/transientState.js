// Set up the transient state data structure and provide initial values
const transientState = {
    "metalId": 0,
    "styleId": 0,
    "sizeId": 0,
    "jewelryTypeId": 0
}

// Functions to modify each property of transient state
export const setMetal = (chosenMetal) => {
    transientState.metalId = chosenMetal;
    console.log(transientState);
}

export const setStyle = (chosenStyle) => {
    transientState.styleId = chosenStyle;
    console.log(transientState);
}

export const setSize = (chosenSize) => {
    transientState.sizeId = chosenSize;
    console.log(transientState);
}

export const setType = (chosenType) => {
    transientState.jewelryTypeId = chosenType;
    console.log(transientState)
}

// Function to convert transient state to permanent state
export const saveCustomOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    
    const response = await fetch("http://localhost:8088/orders", postOptions);

    const customEvent = new CustomEvent("newOrderCreated");
    document.dispatchEvent(customEvent);
}