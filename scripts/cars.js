import { Paints } from "./paints.js"
import { Interiors } from "./interiors.js"
import { Techs } from "./techs.js"
import { Wheels } from "./wheels.js"
import { Orders } from "./order.js"

export const CarsAreUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paint</h2>
                ${Paints()}
            </section>

            <section class="choices__interiors options">
                <h2>Interior</h2>
                ${Interiors()}
            </section>

            <section class="choices__techs options">
                <h2>Technologies</h2>
                ${Techs()}
            </section>

            <section class="choices__wheels options">
                <h2>Rims</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Your Order!</button>
        </article>

        <article class="customOrders">
            <h2>Custom Orders</h2>
            ${Orders()}
        </article>
    `
}