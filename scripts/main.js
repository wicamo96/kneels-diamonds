import { metalOptions } from "./metalOptions.js";
import { saveOrder } from "./saveOrder.js";
import { sizeOptions } from "./sizeOptions.js";
import { styleOptions } from "./styleOptions.js";

const container = document.querySelector("#container");

const render = async () => {
    const metals = await metalOptions();
    const styles = await styleOptions();
    const sizes = await sizeOptions();
    const submit = await saveOrder();

    container.innerHTML = `
    <section class='info'>
    ${metals}
    ${styles}
    ${sizes}
    </section>
    <article class='order'>
    <div class='button'>${submit}</div>
    </article>`;
}

render();