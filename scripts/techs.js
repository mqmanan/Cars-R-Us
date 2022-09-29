import { getTechs, setTech } from "./database.js"

const techs = getTechs()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTech(parseInt(event.target.value))
        }
    }
)

export const Techs = () => {
    return `<h2>Technologies</h2>
        <select id="tech">
            <option value="0">☆ Choose an option ☆</option>
            ${
                techs.map(
                    (tech) => {
                        return `<option value="${tech.id}">${tech.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}


// export const Techs = () => {
//     return `
//     <select id="tech">
//         <option value="0">☆ Choose an option ☆</option>
//         <option value="1">Basic Package</option>
//         <option value="2">Navigation Package</option>
//         <option value="3">Visibility Package</option>
//         <option value="4">Ultra Package</option>
//     </select>`

//     let html = "<ul>"

//     const listItems = techs.map(
//         (tech) => {
//             return `<h2>Technologies</h2>`
//         }
//     )
//     html += listItems.join("")
//     html += "</ul>"

//     return html
// }