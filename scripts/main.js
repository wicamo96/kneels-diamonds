import { metalOptions } from "./metalOptions.js";
import { sizeOptions } from "./sizeOptions.js";
import { styleOptions } from "./styleOptions.js";

const container = document.querySelector("#container");

const render = async () => {
    const metals = await metalOptions();
    const styles = await styleOptions();
    const sizes = await sizeOptions()

    container.innerHTML = `
    <section class='info'>
    ${metals}
    ${styles}
    ${sizes}
    </section>`;
}

render();