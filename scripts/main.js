import { jewelryType } from "./jewelryType.js";
import { metalOptions } from "./metalOptions.js";
import { Orders } from "./orders.js";
import { saveOrder } from "./saveOrder.js";
import { sizeOptions } from "./sizeOptions.js";
import { styleOptions } from "./styleOptions.js";

const container = document.querySelector("#container");

const render = async () => {
    const metals = await metalOptions();
    const styles = await styleOptions();
    const sizes = await sizeOptions();
    const submit = await saveOrder();
    const orderList = await Orders();
    const type = await jewelryType();

    container.innerHTML = `
    <section class='info'>
    ${metals}
    ${styles}
    ${sizes}
    </section>
    <article class='order'>
    <div class='button'>${submit}</div>
    </article>
    <h3>Jewlery Type:</h3>
    <div>${type}</div>
    <article class='orders'><h2>Custom Jewelry Orders</h2>
    <div>${orderList}</div>
    </article>`;
}

document.addEventListener("newOrderCreated", event => {
    console.log("State of data has changes. Regenerating HTML...")

    render()
})

render();