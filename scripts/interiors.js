import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    return `<h2>Interior</h2>
        <select id="interior">
            <option value="0">☆ Choose an option ☆</option>
            ${
                interiors.map(
                    (interior) => {
                        return `<option value="${interior.id}">${interior.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}


// export const Interiors = () => {
//     return `
//     <select id="interior">
//         <option value="0">★ Choose an option ★</option>
//         <option value="1">Beige Fabric</option>
//         <option value="2">Charcoal Fabric</option>
//         <option value="3">White Leather</option>
//         <option value="4">Black Leather</option>
//     </select>`
//     let html = "<ul>"

//     const listItems = interiors.map(
//         (interior) => {
//             return `<h2>Interiors</h2>`
//         }
//     )
//     html += listItems.join("")
//     html += "</ul>"

//     return html
// }