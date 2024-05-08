import { setStyle } from "./transientState.js";

// Define a function to change the styleId in transient state
const handleStyleChange = (changeEvent) => {
    // Check the name in the state of what was changed
    if (changeEvent.target.name === 'style') {
        // Grab the id from the state of what was clicked and parseInt
        const convertedToInteger = parseInt(changeEvent.target.value)
        // Invoke function defined in the transientState module to change the styleId of the transient state
        setStyle(convertedToInteger)
    }
}



export const styleOptions = async () => {
    // Get style info from api
    const response = await fetch("http://localhost:8088/styles");
    // Convert into JS object and store style info in styles variable
    const styles = await response.json();

    // Add an event listener to listen for the style radio buttons to change
    document.addEventListener("change", handleStyleChange)

    // Declare a variable to build out html info
    let stylesHTML = `<section class='card'><h2 class='head'>Styles</h2>`;

    // Iterate through styles info to pull style id to reference and name to display
    for (const style of styles) {
        stylesHTML += `<div><input type='radio' name='style' value='${style.id}' /> ${style.style}</div>`;
    }

    // Close section tag on the styles card
    stylesHTML += `</section>`;

    // Return the info to be displayed
    return stylesHTML;
}