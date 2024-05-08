import { metalOptions } from "./metalOptions.js"
import { styleOptions } from "./styleOptions.js"

const container = document.querySelector("#container")

const render = async () => {
    const metals = await metalOptions()
    const styles = await styleOptions()

    container.innerHTML = `
    <section class='info'>
    ${metals}
    ${styles}
    </section>`
}

render()