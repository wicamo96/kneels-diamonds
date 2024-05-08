export const metalOptions = async () => {
    // Get info from api
    const response = await fetch("http://localhost:8088/metals");
    // Store info as javascript objects in variable metals
    const metals = await response.json();

    // Begin building a string formatted for html
    let metalsHTML = `<section class="card"><h2 class='head'>Metals</h2>`;

    // Use map() to generate new array of strings
    const divStringArray = metals.map((metal) => {
        return `<div class='radioButton'>
            <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
        </div>`
        }
    )

    // Concatenate array of strings just created by using join()
    metalsHTML += divStringArray.join("")

    // Close section for the card
    metalsHTML += `</section>`;

    // Return html info
    return metalsHTML;
}