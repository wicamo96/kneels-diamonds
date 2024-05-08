export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders")
    const orders = await fetchResponse.json()

    let ordersHTML = ``

    let temp = orders.map((order) => {
           return `<div class='orderEntry'>
            <strong>Order #${order.id}</strong>
           </div>`
        }
    )
    return ordersHTML = temp.join("");
}