import { setSize } from "./transientState.js";

export const handleSizeChange = (changeEvent) => {
    // Check that what was changed is the size
    if (changeEvent.target.name === 'size') {
        // Grab the id from the state of what was clicked and parseInt
        const convertedToInteger = parseInt(changeEvent.target.value)
        // Invoke function defined in the transientState module to change the sizeId of the transient state
        setSize(convertedToInteger)
    }
}

export const sizeOptions = async () => {
    // Get size info from api
    const response = await fetch("http://localhost:8088/sizes");
    // Convert info to JS object and store in sizes variable
    const sizes = await response.json();

    // Define an event listener that listens for size to be changed
    document.addEventListener("change", handleSizeChange)

    // Declare a variable to begin building html info
    let sizeHTML = `<section class='card'><h2 class='head'>Sizes</h2>`;

    // Iterate sizes info to pull id of the size and to display the size options
    for (const size of sizes) {
        sizeHTML += `<div><input type='radio' name='size' value='${size.id}' />${size.carets} carets</div>`;
    }

    // Close the section for the card
    sizeHTML += `</section>`;

    // Return html info
    return sizeHTML;

}