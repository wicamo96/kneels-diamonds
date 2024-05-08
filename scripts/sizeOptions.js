export const sizeOptions = async () => {
    // Get size info from the db
    const response = await fetch("http://localhost:8088/sizes");
    // Convert info to JS object and store in sizes variable
    const sizes = await response.json();

    // Declare a variable to begin building html info
    let sizeHTML = `<section class='card'><h2 class='head'>Sizes</h2>`;

    // Iterate sizes info to pull id of the size and to display the size options
    for (const size of sizes) {
        sizeHTML += `<input type='radio' name='size' value='${size.id}' />${size.carets} carets`;
    }

    // Close the section for the card
    sizeHTML += `</section>`;

    // Return html info
    return sizeHTML;

}