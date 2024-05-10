export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await fetchResponse.json()

    let ordersHTML = ``

    let temp = orders.map((order) => {
            let orderPrice = (order.metal.price + order.style.price + order.size.price) * order.jewelryTypeId

            orderPrice = orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })

           return `<div class='orderEntry'>
            <strong>Order #${order.id} costs ${orderPrice}</strong>
           </div>`
        }
    )
    return ordersHTML = temp.join("");
}