export const metalOptions = async () => {
    // Get info from api
    const response = await fetch("http://localhost:8088/metals")
    // Store info as javascript objects in variable metals
    const metals = await response.json()

    // Begin building a string formatted for html
    let metalsHTML = `<section class="card"><h2 class='head'>Metals</h2>`;

    for (const metal of metals) {
        metalsHTML += `<input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}`
    }

    metalsHTML += `</section>`;

    return metalsHTML
}