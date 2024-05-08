import { metalOptions } from "./metalOptions.js"

const container = document.querySelector("#container")

const render = async () => {
    const metals = await metalOptions()

    container.innerHTML = `
    ${metals}`
}

render()