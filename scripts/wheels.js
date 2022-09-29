import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    return `<h2>Rims</h2>
        <select id="wheel">
            <option value="0">☆ Choose an option ☆</option>
            ${
                wheels.map(
                    (wheel) => {
                        return `<option value="${wheel.id}">${wheel.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}


// export const Wheels = () => {
//     return `
//     <select id="wheel">
//         <option value="0">★ Choose an option ★</option>
//         <option value="1">17-in Pair Radial</option>
//         <option value="2">17-in Pair Radial Black</option>
//         <option value="3">18-in Pair Spoke Silver</option>
//         <option value="4">18-in Pair Spoke Black</option>
//     </select>`

//     let html = "<ul>"

//     const listItems = wheels.map(
//         (wheel) => {
//             return `<h2>Wheels</h2>`
//         }
//     )
//     html += listItems.join("")
//     html += "</ul>"

//     return html
// }