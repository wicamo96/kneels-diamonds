export const styleOptions = async () => {
    // Get style info from db
    const response = await fetch("http://localhost:8088/styles");
    // Convert into JS object and store style info in styles variable
    const styles = await response.json();

    // Declare a variable to build out html info
    let stylesHTML = `<section class='card'><h2 class='head'>Styles</h2>`;

    // Iterate through styles info to pull style id to reference and name to display
    for (const style of styles) {
        stylesHTML += `<input type='radio' name='style' value='${style.id}' /> ${style.style}`;
    }

    // Close section tag on the styles card
    stylesHTML += `</section>`;

    // Return the info to be displayed
    return stylesHTML;
}